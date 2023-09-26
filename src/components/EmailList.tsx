import { Get, MgtTemplateProps } from '@microsoft/mgt-react';
import React from 'react'
import Loader from './Loader';

const EmailList: React.FC = () => {
  return (
    <Get resource="/me/messages">
        <Email template='value' />
        <Loader template='loading' />
    </Get>
  )
}

export default EmailList;

const Email: React.FC<MgtTemplateProps> = ({ dataContext }: MgtTemplateProps) => {
    return (
        <div className="mb-6">
            <p className="text-blue-800 mb-1">Subject: {dataContext.subject}</p>
            <div dangerouslySetInnerHTML={{ __html: dataContext.body.content}}/>
        </div>
    );
} 