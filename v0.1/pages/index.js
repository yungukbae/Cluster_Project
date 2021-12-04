import Head from 'next/head'
import Signout from "../component/signout";
import Signin from "../component/signin";
import Grouplist from "../component/grouplist";
import ItemDetail from "../component/itemdetail";

export default function Home() {
  return (
   <>
    {/*<Signout/>*/}
    {/*<Signin/>*/}
    {/* <Grouplist/> */}
    <ItemDetail/>
   </>
  )
}
