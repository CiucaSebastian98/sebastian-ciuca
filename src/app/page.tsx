import { Inter } from 'next/font/google'
import data from '../../data/data';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const currentYear = new Date().getFullYear()
  const {
    description,
    copyrightText,
    socialIcons,
    socialIconsHeading,
    title,
  } = data

  return (
    <>
      <main className="flex min-h-screen bg-slate-950 flex-col items-center justify-between p-5 lg:p-12">
        <div className="relative flex flex-col  place-items-center mt-20">
          <h2 className='text-center font-heading m-10 text-6xl sm:text-7xl lg:text-8xl leading-[5rem] sm:leading-[7rem] lg:leading-[7rem] font-bold '>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>{title}</span>
            <span>⏳</span>
          </h2>
          <p className='text-2xl md:text-3xl px-6 max-w-3xl text-center m-5 text-slate-100 font-thin' dangerouslySetInnerHTML={{
            __html: description
          }}>
          </p>
        </div>
        <footer className='text-slate-500 text-center'>
          <div className='my-4 text-center' >
            <ul className='flex flex-wrap lg:flex justify-center '>
              <li className='px-2'> {socialIconsHeading} </li>
              {socialIcons.map((social, index) =>
              (
                <li key={index} className='px-2 capitalize'>
                  <a target='_blank' href={social.link}> {social.icon}  </a>
                </li>
              )
              )}
            </ul>
          </div>
          <div className=''>
            <p className='' dangerouslySetInnerHTML={{
              __html: copyrightText
            }}>
            </p>

          </div>
        </footer>

      </main>
    </>
  )
}
