import React, { useEffect, useRef } from 'react'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

interface QuillEditorProps {
    onChange: (content: string) => void
}

const QuillEditor: React.FC<QuillEditorProps> = ({ onChange }) => {
    const editorRef = useRef<HTMLDivElement | null>(null)
    const quillInstanceRef = useRef<Quill | null>(null)

    useEffect(() => {
        if (editorRef.current && !quillInstanceRef.current) {
            quillInstanceRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': [] }, { 'font': [] }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'align': [] }],
                        ['bold', 'italic', 'underline'],
                        ['link'],
                        ['blockquote'],
                        ['image'],
                        ['video'],
                    ],
                },
            })
        }

        if (quillInstanceRef.current) {
            quillInstanceRef.current.on('text-change', () => {
                onChange(quillInstanceRef.current?.root.innerHTML || '')
            });
        }

    }, [onChange])

    return (
        <div>
            <div ref={editorRef} style={{ height: 'auto', minHeight: '250px', backgroundColor: '#fff' }}></div>
        </div>
    )
}

export default QuillEditor