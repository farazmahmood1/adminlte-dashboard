import React, { useState, useEffect } from 'react'
import { AsyncStorage } from 'AsyncStorage'
import axios from 'axios'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col } from 'react-grid-system';
const ViewProgress = () => {


    // const columns = ['task', 'category'];
    // columns.map( (column, index) => {
    //   let col = column;
    //   let setCol = column+index;
    //   [col, setCol] = useState(false)
    // })

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
                        <div className="col-lg-12">
                            <div className="card card-primary card-outline">

                                <Container>
                                    <Row>
                                        {data.map((item, i) => {
                                            return (
                                                <Col sm={4} key={i}>
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
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ViewProgress