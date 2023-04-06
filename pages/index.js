import Head from 'next/head';
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import {  useState } from 'react';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Brian Mwiruki</title>
        <meta name="description" content="Generated by create next app" />   
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
       <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons dark:text-white'>Bryan.Dev</h1>
            <ul className='flex items-center'>
              <li>
                 <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-teal-50' />
         
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 rounded-md ml-8'
                 href='resume.pdf' download='Brian resume.pdf'>
                  Resume
                 </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Bryan</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
              Software Engineer with a passion for building things. Providing services for programing and software development.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
           <a href="https://github.com/Bryan4real"><AiFillGithub /></a> 
           <a href="https://www.linkedin.com/in/brian-mwiruki-996116161/"><AiFillLinkedin /></a> 
           <a href="mailto:mwiruki@outlook.com"><AiFillMail /></a> 
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
       

        <div>
          <h3 className='text-3xl py-2 text-center dark:text-teal-700'>Services I Offer</h3>
          <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
            Since the beginning of my career, i have been working as a software engineer for a company that i am proud of. I have done remote work for 
            <span className='text-teal-500'> agencies </span> consolted for <span className='text-teal-500'> startups </span> and collaborated with talented people to create digital products both business and consumer use.
          </p>
         
        </div>
        <div className='lg:flex gap-10'>
          <div className="text-center justify-center shadow-lg p-10 rounded-xl my-10">
            <div className='flex justify-center'>
              <Image src={design} width={100} height={100}/>
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>illustrator</p>
            <p className='text-gray-800 py-1'>Figmma</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <div className='flex justify-center'>
             <Image src={code} width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>illustrator</p>
            <p className='text-gray-800 py-1'>Figmma</p>
          </div>

          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <div className='flex justify-center'>
              <Image src={consulting} width={100} height={100} />
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>
              Creating elegant designs suited for your needs following core design theory.
            </p>
            <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
            <p className='text-gray-800 py-1'>Photoshop</p>
            <p className='text-gray-800 py-1'>illustrator</p>
            <p className='text-gray-800 py-1'>Figmma</p>
          </div>
        </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-2 text-center dark:text-teal-700'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-400'>
            Since the beginning of my career, i have been working as a software engineer for a company that i am proud of. I have done remote work for 
            <span className='text-teal-500'> agencies </span> consolted for <span className='text-teal-500'> startups </span> and collaborated with talented people to create digital products both business and consumer use.
          </p>
        
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image src={web1} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web4} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web5} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web6} className='rounded-lg object-cover' width={"100%"} height={"100%"} layout='responsive' />
            </div>
          </div>

        </section>
      </main>
    </div>
  );
}
