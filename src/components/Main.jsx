import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'AsyncStorage'
import axios from 'axios'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from 'react-grid-system';


toast.configure()
const Main = () => {

  const [link, setLink] = useState('')
  const [userID, setoleID] = useState()
  const [data, setData] = useState([])

  const fetchData = () => {
    axios.get('https://digicardapi.alphanitesofts.com/api/fetchurl')
      .then((res) => {
        console.log(res)
        setData(res.data.Url)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => { fetchData() }, [])


  const postLink = () => {

    const userObj = {
      user_id: userID,
      url: link
    }

    axios.post('https://digicardapi.alphanitesofts.com/api/url', userObj)
      .then((res) => {
        console.log(res)
        toast.info('Link Posted Successfully')
      })
      .catch((err) => {
        console.log(err)
        toast.warn('error while uploading link')
      })
  }

  const SetLocalLogin = async () => {
    try {
      let userID = await AsyncStorage.getItem('ID');
      if (userID !== null) {
        setoleID(userID)
      }
    } catch {
      return null;
    }
    console.log(userID)
  }

  useEffect(() => { SetLocalLogin() }, [])


  return (
    <div>
      <div className="">
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Starter Page</h1>
                </div>

              </div>
            </div>
          </div>
          <div className="content">
            <div className="container-fluid">
              <div className="row">

                {/* /.col-md-6 */}
                <div className="col-lg-12">
                  <div className="card card-primary card-outline">

                    <div className="card-body">
                      <div className="input-group input-group-lg mt-4 mb-2">
                        <span className="input-group-text" id="inputGroup-sizing-lg"> <i className="fa-solid fa-link" />  </span>
                        <input type="text" className="form-control " onChange={(e) => setLink(e.target.value)} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                      </div>
                      <h4 className='mt-2 mb-2'>Paste the embedded Youtube  <i className="fa-brands fa-youtube" />	 link here!</h4>
                      <button onClick={postLink} className='btn btn-primary btn-lg'>Submit</button>
                    </div>
                  </div>
                </div>
                {/* /.col-md-6 */}
              </div>
              {/* /.row */}
            </div>
            <div className="row">

              {/* /.col-md-6 */}
              <div className="col-lg-12">
                <div className="card card-primary card-outline">

                  <Container>
                    <Row>
                      {data.map((item) => {
                        return (
                          <Col sm={4}>
                            <iframe src={`${item.itemName}?autoplay=1&mute=1`}
                              title="YouTube video player" frameBorder={0}
                              allow="autoplay"
                              height={200}
                              className="p-1"
                              allowfullscreen="true" />
                          </Col>
                        )
                      })}
                    </Row>
                  </Container>

                </div>
              </div>
              {/* /.col-md-6 */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content */}
        </div>
        {/* /.content-wrapper */}
        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
          <div className="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
          </div>
        </aside>
        {/* /.control-sidebar */}
        {/* Main Footer */}

      </div>

    </div>
  )
}

export default Main