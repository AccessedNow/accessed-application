import FusePageSimple from '@fuse/core/FusePageSimple';
import withReducer from 'app/store/withReducer';
import styled from 'styled-components';
import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';

import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDeepCompareEffect } from '@fuse/hooks';
import EmailEditor from 'react-email-editor';
import templateJson from './sample.json';

import reducer from './store';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  border-bottom: 1px solid #bbb;
`;

const Bar = styled.div`
  flex: 1;
  background-color: #fafafa;
  color: #000;
  padding: 10px;
  display: flex;
  max-height: 60px;
  h1 {
    flex: 1;
    font-size: 16px;
    text-align: left;
  }
  button {
    flex: 1;
    padding: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    background-color: #000;
    color: #fff;
    border: 0px;
    max-width: 150px;
    cursor: pointer;
  }
`;



function EmailTemplateApp(props) {
	const dispatch = useDispatch();
	const pageLayout = useRef(null);
	const routeParams = useParams();
  const emailEditorRef = useRef(null);

  const exportHtml = () => {
    emailEditorRef.current.editor.exportHtml((data) => {
      const { design, html } = data;
      console.log('exportHtml', html);
    });
  };

  const saveDesign = () => {
    emailEditorRef.current.editor.saveDesign((design) => {
      console.log('saveDesign', design);
      alert('Design JSON has been logged in your developer console.');
    });
  };


  const onLoad = () => {
    // you can load your template here;
    emailEditorRef.current.editor.loadDesign(templateJson);
  };

	useDeepCompareEffect(() => {

	}, [dispatch, routeParams]);

	return (
		<>
			<FusePageSimple
				classes={{
					contentWrapper: 'p-0 sm:p-0 h-full',
					content: 'flex flex-col h-full',
					leftSidebar: 'w-256 border-0',
					rightSidebar: 'w-512',
					header: 'min-h-72 h-72 sm:h-72 sm:min-h-72',
					wrapper: 'min-h-0'
				}}
				content={
          <Container>
            <Bar>
              <h1></h1>

              <Button onClick={saveDesign}>Save</Button>
              <Button onClick={exportHtml}>Export</Button>
            </Bar>
						<React.StrictMode>
          	<EmailEditor ref={emailEditorRef} onLoad={onLoad} /></React.StrictMode>
					</Container>
				}
				sidebarInner
				ref={pageLayout}

			/>
		</>
	);
}

export default withReducer('emailTemplateApp', reducer)(EmailTemplateApp);
