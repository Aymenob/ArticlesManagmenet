import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const ModalAddArticle = ({handleSubmit,handleNumber,handleChange,handleClose,handleShow,show,handleNew,formRef}) => {
//AR_Ref, AR_Design, FA_CodeFamille, AR_Garantie, AR_UnitePoids,AR_PoidsNet, AR_PoidsBrut, AR_UniteVen, AR_PrixAch, AR_Coef, AR_PrixVen, AR_SuiviStock, AR_Gamme1, AR_Gamme2, AR_DateCreation    
  return (
    
    <>
    <Button style={{marginLeft:"0cm",}} variant="success" onClick={handleShow}>
        New Article
    </Button>

    <Modal  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title className='modalTitle'>Add Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form className='FormArticle' ref={formRef}>
              
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_Ref</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_Ref"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_Design</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_Design"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>FA_CodeFamille</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="FA_CodeFamille"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_Garantie</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_Garantie"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_UnitePoids</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_UnitePoids"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_PoidsNet</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_PoidsNet"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_PoidsBrut</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_PoidsBrut"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_UniteVen</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_UniteVen"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_PrixAch</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_PrixAch"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_Coef</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_Coef"/> 
               
                </Form.Group>
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_PrixVen</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_PrixVen"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_SuiviStock</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_SuiviStock"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_Gamme1</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_Gamme1"/> 
                </Form.Group>
                
                <Form.Group className="mb-0" controlId="exampleForm.ControlInput1">
                    <span>AR_Gamme2</span>
<Form.Control type="url" placeholder="" onChange={handleChange} name="AR_Gamme2"/> 
                </Form.Group>
                
              
                
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
                Save Changes
            </Button>
        </Modal.Footer>
    </Modal>
</>
  )
}

export default ModalAddArticle