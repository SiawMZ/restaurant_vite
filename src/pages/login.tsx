import {auth,provider} from '../config/firebase';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from 'react-router-dom'

export const Login =()=>{
    const navigate=useNavigate()

    const signinWithGoogle= async()=>{
        const result=await signInWithPopup(auth,provider);
        console.log(result);
        navigate("/");
    }

    return (
        <>
        <div>
        <p className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
            Sign In with Google to continue</p>
        <button  className="text-white underline decoration-sky-500" onClick={signinWithGoogle}>Sign in</button>
        </div>

        <div>
        <p className='text-amber-200 font-bold inline-block mr-3 py-5'>Not a member yet? </p>
        <button className="rounded-md bg-slate-300 drop-shadow-xl hover:drop-shadow-md hover: shadow-white">Register Here</button>
        </div>
        </>
        )
}