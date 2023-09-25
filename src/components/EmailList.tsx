import { Get, MgtTemplateProps } from '@microsoft/mgt-react';
import React from 'react'

const EmailList: React.FC = () => {
  return (
    <Get resource="/me/messages">
        <Email template='value' />
    </Get>
  )
}

export default EmailList;

const Email: React.FC<MgtTemplateProps> = ({ dataContext }: MgtTemplateProps) => {
    console.log(dataContext);
    return (
        <div className="mb-6">
            <p className="text-blue-800 mb-1">Subject: {dataContext.subject}</p>
            <div dangerouslySetInnerHTML={{ __html: dataContext.body.content}}/>
        </div>
    );
} 