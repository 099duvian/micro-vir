import React, {useState} from 'react';
import axios from 'axios'
import {uploadImageApi} from '../../api/imagen'

export default function UploadImages() {
    
   
    const [newImage, setNewImage] = useState({
        image: ''
    })
   
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', newImage.image)
        
        axios.post('http://localhost:3000/upload', formData).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
    
    const handleImage = (e)=>{
        setNewImage({
            ...newImage,
            image: e.target.files[0]
        })
    }
    
    return (
        <div>
            <div style={{marginTop: 95, marginLeft: 500}} className="input-group">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <input type="file" onChange={handleImage} name="image" className="form-control mb-3"/>
                    <button className="btn btn-outline-success" type="submit" id="inputGroupFileAddon04">Subir Imagen</button>
                </form>
            </div>
        </div>
    )
}