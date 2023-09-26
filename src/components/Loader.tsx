import { MgtTemplateProps, Spinner } from '@microsoft/mgt-react'
import React from 'react'

const Loader: React.FC<MgtTemplateProps> = (props: MgtTemplateProps) => (
    <Spinner />
)

export default Loader