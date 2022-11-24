import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'AsyncStorage'
import axios from 'axios'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from 'react-grid-system';
const ViewProgress = () => {



    const [data, setData] = useState([])
    const[getURLID , setURLID] = useState()

    const fetchData = () => {
        axios.get('https://digicardapi.alphanitesofts.com/api/fetchurl')
            .then((res) => {
                if(res.data.Url[0] === undefined){
                    setData('no data')
                }
                else{
                    for (let i = 0; i <500 ; i++) {
                        setData(p=>[...p,res.data.Url[0]])
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

                    data === "no data"? <h1 className='text-center'>No data found</h1> :
                        <di className="col-lg-12">
                            <div className="card card-primary card-outline">
                           
                                <Container>
                                    <Row>
                                        {   data.map((item, i) => {
                                            return (
                                                // item === undefined?
                                                // <p>No data found</p> :
                                                <Col sm={4} key={i}>
                                                    <iframe src={`${item.url}?autoplay=1&mute=1`}
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
                        </di>
                            }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewProgress