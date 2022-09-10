import React, { useRef, useEffect } from 'react';
import JoditEditor from "jodit-react";

const HtmlEditor = ({ contentOne, setContentOne }) => {
	const editor = useRef(null)
	const [content, setContent] = React.useState('')
	
	useEffect(()=>{
		if(contentOne){
			setContent(contentOne)
		}
	},[contentOne])

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
	
	return (
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
		tabIndex={1} // tabIndex of textarea
		onBlur={newContent => setContentOne(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
            />
        );
}

export default HtmlEditor