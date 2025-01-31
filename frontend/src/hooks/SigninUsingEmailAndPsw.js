import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import showToast from './CreateCustomToast';

function SigninUsingEmailAndPsw() {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async(inputs) => {
        if(!inputs.email || !inputs.username || !inputs.password || !inputs.confirmPassword){
            showToast("Error", "Please fill all the fields", "error");
            return;
        }
        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser || error){
                console.log('Error is ',error.message);
                showToast("Error", error.message, "error")
                return;
            }
            if(newUser){
                const userDoc = {
                    uid : newUser.user.uid,
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

            showToast("Success", "Account created successfully!", "success");

            // add this document to mongoDB/storage
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }

    return {loading, error, signup}

}

export default SigninUsingEmailAndPsw