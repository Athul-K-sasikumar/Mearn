import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


const ProjectCard = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (



    <>
     <Card onClick={handleShow} className='shadow btn'>
      <Card.Img height={'200px'} variant="top" src="https://c4.wallpaperflare.com/wallpaper/888/401/127/ai-art-gamer-computer-pc-gaming-hd-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
      </Card.Body>
    </Card>

   

      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project DEtails</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-eMQn7TTXWFxq5mptfPcWUiiIXsZo_89eZZOwtmQvSGF8OeHcUnmUm89A-8Kark3Gay0&usqp=CAU" alt="" />
            </div>
            <div className="col-lg-6">
              <h3>Title</h3>
              <h6><span className='fw-bolder'>Languages used: </span> <span className='text-danger'>HTML,css</span></h6>
              <p style={{textAlign:'justify'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, ad labore beatae dolore voluptate temporibus excepturi nostrum ab ipsum harum quod natus, porro reprehenderit enim quasi, quae illo atque. Ipsum. </p>
            </div>
          </div>
          <div className='float-start'>
            <a className='btn btn-secondary' href="" target='_blank'><i className='fa-brands fa-github'></i></a>
            <a className='btn btn-secondary ms-2' href=""><i className='fa-solid fa-link'></i></a>
          </div>
        </Modal.Body>
       
      </Modal>

    </>
  )
}

export default ProjectCard