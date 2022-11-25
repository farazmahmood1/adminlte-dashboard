import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player/lazy';
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from 'react-grid-system';

const ViewProgress = () => {

    const [data, setData] = useState([])

    const fetchData = () => {
        axios.get('https://digicardapi.alphanitesofts.com/api/fetchurl')
            .then((res) => {
                if (res.data.Url[0] === undefined) {
                    setData([])
                }
                else {
                    for (let i = 0; i < 10; i++) {
                        setData(p => [...p, res.data.Url[0]])
                    }
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(data)

    useEffect(() => { fetchData() }, [])

    return (
        <div className="">
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Running Videos</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                    </div>
                    <div className="row">

                        {
                            data.length < 0 ? <h1 className='text-center'>No data found   </h1> :
                                <div className="card card-primary card-outline table-responsive">

                                    <Row>
                                        {data.map((item, i) => {
                                            return (

                                                <Col sm={4} key={i}>

                                                    <ReactPlayer
                                                        playing={true}
                                                        mute={true}
                                                        loop={true}
                                                        url={`${item.url}`} />

                                                </Col>
                                            )
                                        })}
                                    </Row>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewProgress