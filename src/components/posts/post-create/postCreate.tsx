import React, {useState} from 'react'
import './postCreate.css'
import QuillEditor from "../../quill-editor/quillEditor";
import {slugFormatter} from "../../../utils/formatters/slug.formatter";
import CategoryCard from "../../shared/category-card/categoryCard";


const PostCreate = () => {
    const [formData, setFormData] = useState({
        title: '',
    });
    const [editorContent, setEditorContent] = useState<string>('')

    const handleEditorChange = (content: string) => {
        setEditorContent(content)
    }

    const submitPost = () => {
        console.log('submitPost')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const categoryValue = (e: any) => {
        console.log(e)
    }

    return (
        <div className="post-create-container">
            <div>
                <form onSubmit={submitPost}>
                    <div className="pt-lg">
                        <input
                            className="title-input"
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder={"Click to add title"}
                            required={true}
                        />
                        <div className="flex items-center slug-text-container">
                            {
                                formData.title &&
                                <span className="slug-text">
                                    { window.location.origin}/posts/{slugFormatter(formData.title) }
                                </span>
                            }
                        </div>
                    </div>

                    <QuillEditor onChange={handleEditorChange}/>

                    <div className="pt-lg">
                        <button type="submit" className="btn-secondary-sm">Create Post</button>
                    </div>
                </form>
            </div>

            <div className="flex items-start direction-col">
                <div className="card-container">
                    <CategoryCard value={categoryValue}/>
                </div>
                <div className="image-upload-container">
                    <div className="image-upload-section">
                        <p className="p-sm">Set featured image</p>
                        <button className="btn-secondary-sm">upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCreate