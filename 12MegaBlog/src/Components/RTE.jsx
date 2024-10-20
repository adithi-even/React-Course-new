//Real Time Editor

import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Controller} from 'react-hook-form'

export default function RTE({name, control, label, defaultValue = ''}) {
  return (//here important is the control here we get it from react-hook-form and this control is responsible for taking all the states from this component to that form , and we are gonna use this control in that form when we use RTE in that form 
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>
            {label} </label>}

        <Controller
        name={name || "content"}
        control={control}
        render={({field : {onChange}})=>{
            //what ever wewant to render
            <Editor
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}  
        />
        }} //if there is any changes inside this field then inform me along with render in the line 16 
        />
    </div>


)
}

//when ever this RTE is called what are the input we are giving is
//