import { getAuth,signInWithPopup,GoogleAuthProvider,onAuthStateChanged,createUserWithEmailAndPassword,signOut ,signInWithEmailAndPassword   } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [isLoading,setIsLoading] =useState(true)

    const auth= getAuth();

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
    const registerWithEmailPass=(email,password)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(userCredential=>{
            const loaduser = userCredential.user;
            console.log(loaduser)
           
        })
        .catch((error)=>{
            
          })
          .finally(()=>setIsLoading(false))
    }
   
    const userLogin=(email ,password)=>{
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
       
        userLogin,logOut}
}
export default useFirebase;