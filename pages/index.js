import Link from 'next/link'
import MyHead from '../components/MyHead'
import Apply from './apply'

export default function Home() {
  return (
    <>
      <MyHead
        title="Home"
        description="Welcome to TypeFinance, where we help you to choose the best financing for you"
        image="https://typefinance.com/typefinance-dp.jpg"
        url=""
      />
      
      <Apply />
     
    </>
  )
}
