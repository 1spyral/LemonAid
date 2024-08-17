import {
    Alert,
    AlertContainer,
    AlertDismiss,
    AlertIcon,
    AlertTitle,
} from 'keep-react'

export const AddFoodAlert = ({ onDismiss }) => {
    return (
        <Alert color="success">
        <AlertContainer>
            <AlertIcon />
            <AlertTitle>Item Added Successfully!</AlertTitle>
        </AlertContainer>
        <AlertContainer>
            <AlertDismiss onClick={onDismiss}/>
        </AlertContainer>
        </Alert>
    )
}