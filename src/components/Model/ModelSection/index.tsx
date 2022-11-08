import React, { useEffect, useRef } from 'react'
import { ReactNode } from 'react'
import useModel from '../useModel'

import { Container } from './styles'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode
    modelName: string
    overlayNode: React.ReactNode
}

const ModelSection: React.FC<Props> = ({
    children,
    modelName,
    overlayNode,
    ...props
}) => {
    const { registerModel } = useModel(modelName)

    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (sectionRef.current) {
            registerModel({ modelName, overlayNode, sectionRef })
        }
    }, [ modelName, overlayNode, sectionRef ])

    return <Container ref={sectionRef} {...props}>{children}</Container>
}

export default ModelSection