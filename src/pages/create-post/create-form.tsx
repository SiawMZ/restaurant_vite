import {useForm} from 'react-hook-form';
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc, collection} from 'firebase/firestore'; 
import { auth,db } from '../../config/firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from 'react-router-dom'

interface createFormData {
    title:string;
    description: string;
}


export const CreateForm=()=> {
    const navigate=useNavigate()

    const [user]=useAuthState(auth);

    const schema=yup.object().shape({
        title: yup.string().required("need a title"),
        description:yup.string().required("write something"),
    });

    const {register,handleSubmit,formState:{errors}}=useForm<createFormData>({
        resolver:yupResolver(schema),
    })

    const postRef=collection(db,"tipsycat")

    const onCreatePost=async (data:createFormData)=>{
        await addDoc(postRef, {
            description:data.description,
            title:data.title,
            user:user?.displayName,
            userID:user?.uid
        });
        navigate("/")
    };

  return (
    <div className="flex justify-center ">
    <div className="box-content w-1/3 p-6 bg-pink-500 center ">
    <form onSubmit={handleSubmit(onCreatePost)}>
        <input className="w-full p-2 mb-2 rounded border border-gray-300" placeholder="Title" {...register("title")}/>
        <br />
        <p className='text-red-600'>{errors.title?.message}</p>
        <br />
        <textarea placeholder="Description" {...register("description")}/>
        <p className='text-red-600'>{errors.description?.message}</p>

        <input type='submit'/>
    </form>
    </div>
    </div>
);
  
}
