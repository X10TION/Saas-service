import type { NextPage } from 'next'
import Head from 'next/head'
import {supabase} from '../utils/supabase'
import Link from 'next/link'

const Home: NextPage = ({lessons}) => {
  console.log({ lessons })
  console.log(supabase.auth.getUser())
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="bg-green-600 p-8 text-lg round">Seamless service</h1>
      {lessons.map(lesson => (
      <Link href={`/${lesson.id}`} key={lesson.id} >
      <a className='p-8 h-40 mb-4 rounded shadow text-xl flex'>
      {lesson.title}
      </a>
      </Link>
      ))}

    </div>
  )
}


export const getStaticProps: GetStaticProps = async () => {

  const { data: lessons } = await supabase.from('lession').select('*')

  return {
    props:{
      lessons
    }
  }
}
export default Home
