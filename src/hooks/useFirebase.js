import { getAuth,updateProfile,signInWithPopup,GoogleAuthProvider,sendEmailVerification,onAuthStateChanged,createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const auth= getAuth();
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading] =useState(true)
   
    

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPass]=useState('')
      
const handleEmail=e=>{
    setEmail(e.target.value)
}
const handlePassword=e=>{
    setPass(e.target.value)
}

    
// Evnet handleing for Name
const handleName=e=>{
    setName(e.target.value)
} 


    const signInWithGoogle=()=>{
        setIsLoading(true)
        const googleProvider= new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const loadUser=result.user
            setUser(loadUser)
        })
        .catch(error=>{})
        .finally(()=>setIsLoading(false))
    }
    const registerWithEmailPass=()=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const loaduser = userCredential.user;
            console.log(loaduser)
            verifyEmail()
            userName()
        })
        .catch((error)=>{
            
          })
          .finally(()=>setIsLoading(false))
    }
   
    const userName=()=>{
        updateProfile (auth.currentUser,{
            displayName: name
          })
          .then(result=>{})
    }
    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result=>{
          console.log(result)
        }) 
      }
    const userLogin=( )=>{
        setIsLoading(true)
        signInWithEmailAndPassword (auth,email,password)
        .then(result=>{
            setUser(result.user)
        }).finally(()=>setIsLoading(false))
        .catch(error=>{
            
          })

    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,user=>
         {
             if(user){
                 setUser(user)
             }
             else{
                 setUser({})
             }
             setIsLoading(false)
         });
         return ()=>unSubscribe
     },[])
 
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
          })
          
          .catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false))
          
    }
    
    return {
        user,
        isLoading,
        signInWithGoogle,
        registerWithEmailPass,
        handleName,
        handlePassword,
        handleEmail,
        userLogin,logOut}
}
export default useFirebase;