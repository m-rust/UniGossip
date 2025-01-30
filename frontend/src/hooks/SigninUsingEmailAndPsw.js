import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import useShowToast from './CreateCustomToast';

function SigninUsingEmailAndPsw() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const showToast = useShowToast();

    const signup = async(inputs) => {
        if(!inputs.email || !inputs.username || !inputs.password || !inputs.confirmPassword){
            showToast("Error", "Please fill all the fields", "error")
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser || error){
                showToast("Error", error.message, "error")
                return;
            }
            if(newUser){
                const userDoc = {
                    uid : newUser.user.id,
                    email : inputs.email,
                    password : inputs.password,
                    fullName : inputs.fullName,
                    // bio : "",
                    // profilePictureURL : "",
                    // followers : [],
                    // following : [],
                    createdAt : Date.now()
                }
            }

            // add this document to mongoDB/storage
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

    return {loading, error, signup}

}

export default SigninUsingEmailAndPsw