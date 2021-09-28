import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons'
import React from 'react'


// skip to line 98 for configurations
// Components below, fold them for less headaches

function TabButton({ isActive, icon, name, color, ...props }) {
  return(
    <a className={`py-4 px-6 block cursor-pointer focus:outline-none border-b-4 ${!isActive ? `text-white border-transparent ${color[1]}` : `rounded-t-lg bg-white bg-opacity-25 shadow-lg text-white font-medium ${color[0]}`}`} {...props}>
      {icon} <br className='sm:hidden block'/> <span>{name}</span>
    </a>
  )
}

function StyledCard({ image, href, label, title, content, ...props }) {
  return(
    <div className='xl:w-1/3 md:w-1/2 max-h-fit w-full border-transparent mb-3'>
      <div className=' duration-150 p-2 rounded-lg hover:p-1'>
        <a className="" href={href}>
          <div className='w-full rounded-lg duration-150 shadow-lg'>
            <img className="brightness-95 lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded-lg w-full object-cover object-center rounded-b-none" src={image} alt="Image Size 720x400" />
            <div className="bg-white p-6 rounded-lg rounded-t-none bg-opacity-50">
              {label}
              <h2 className="text-lg text-gray-900 font-medium mb-2">{title}</h2>
              <p className="leading-relaxed text-base">{content}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

function Card({ children, ...props }) {
  return(
    <div className='flex justify-center'>
      {/* shadow-lg bg-white rounded-xl */}
      <div className='my-8 center min-h-screen w-11/12 md:w-10/12 sm:w-4/6' {...props}>
        {children}
      </div>
    </div>
  )
}

function LabelHalted() {
  return <>
  <h3 className='tracking-widest text-xs font-medium text-gray-500'> <FontAwesomeIcon className='mr-2' icon={['fas', 'flag']}/>HALTED</h3>
  </>
}

function LabelCurrent() {
  return <>
  <h3 className='tracking-widest text-xs font-medium text-emerald-600'> <FontAwesomeIcon className='mr-2' icon={['fas', 'tools']}/>
  CURRENT
  </h3>
  </>
}

function LabelCompleted() {
  return <>
  <h3 className='tracking-widest text-xs font-medium text-blue-500'> <FontAwesomeIcon className='mr-2' icon={['fas', 'check']}/>
  COMPLETED
  </h3>
  </>
}

function LabelDiscontinued() {
  return <>
  <h3 className='tracking-widest text-xs font-medium text-rose-500'> <FontAwesomeIcon className='mr-2' icon={['fas', 'times']}/>
  DISCONTINUED
  </h3>
  </>
}

function SocialCard({ color, icon, content, href, description }) {
  return(
    <a className='xl:w-1/3 md:w-1/2 w-full  p-2 hover:p-1 duration-150' href={href}>
      <div className='rounded-lg duration-150 shadow-lg'>
        <div className={`flex flex-row bg-white p-6 rounded-lg border-l-8 ${color} bg-opacity-50`}>
          <div className='align-middle mr-3'>
            <FontAwesomeIcon icon={icon} size='2x'/>
          </div>
          <div>
            <p className="align-middle font-medium text-xl">
              {content}
            </p>
            <p className='text-xs tracking-wide uppercase font-medium'>
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  )
}

export default function Home() {
  const [active, setActive] = React.useState(0)

  // page configurations below, also fold them for less headaches

  const projects = [
    {
      label: <LabelCompleted />,
      title: 'Whois',
      content: <><b>Whois</b> is an already built site for telling who you are and what you do.
      This site is built on top of <b>Whois</b>. <b>No backend needed or additional programming</b>.</>,
      href: '/whois',
      image: '../assets/whoisme.jpg',
    },
    {
      label: <LabelDiscontinued />,
      title: '1mmucity',
      content: <><b>1mmucity</b> is an incomplete site for chatting through the internet.
      Although it is not being developed anymore, <b>the backend or overall functionality works just fine</b>.</>,
      href: 'https://1mmucity.vercel.app',
      image: '../assets/1mmucity.jpg',
    },
  ]
  
  const socials = [
    {
      href: 'https://instagram.com/adrieljsx',
      description: '@adrieljsx',
      content: 'Instagram',
      color: 'border-orange-400',
      icon: faInstagram
    },
    {
      href: 'https://discord.com',
      description: '1mmunity#5719',
      content: 'Discord',
      color: 'border-indigo-400',
      icon: faDiscord
    },
    {
      href: 'https://github.com/1mmunity',
      description: '/1mmunity',
      content: 'GitHub',
      color: 'border-purple-500',
      icon: faGithub
    },
  ]
  
  const tabs = [
    {
      name: 'About me',
      icon: <FontAwesomeIcon className='mr-1 text-indigo-400' icon={['fas', 'question-circle']} />,
      content: (
        <div className='shadow-lg bg-white bg-opacity-50 rounded-xl p-8'>
          <h2 className='font-medium text-3xl mb-3'>👋 I'm Adriel J.</h2>
          <p>I do stuff, <b>cool</b> stuff, <b>really really cool</b> stuff. (Notice the cool)</p>
          <p>I'm a 14 year old Indonesian student/programmer.</p>
          <p className='mb-8'>I'm a <b>Fullstack web developer</b> but
          i sometimes do general programming as well. (Algorithms, datas, etc.)</p>
          
          <h2 className='font-medium text-3xl mb-3'>💻 Technologies</h2>
          <ul className='mb-8 list-disc list-inside'>
            <li><b>JavaScript/Node.js</b> (Primary)</li>
            <li><b>HTML/CSS</b> (Supplementary)</li>
            <li><b>Python</b> (Secondary)</li>
            <li><b>C++</b> (Algorithm main)</li>
            <li><b>C#</b> (Unity)</li>
            <li><b>Java</b> (Learned it, never used it lol)</li>
          </ul>
  
          <h2 className='font-medium text-3xl mb-3'>📚 Currently learning</h2>
          <p>I'm currently learning about <b>Electrical Engineering</b> but
          i'm still making (random) (<b>cool</b>) stuff though ;)</p>
  
          <button onClick={() => setActive(1)} className='duration-150 font-medium rounded-lg mt-3 text-blue-500 hover:brightness-75'>View Projects</button>
        </div>
      ),
      color: ['border-indigo-400', 'hover:border-indigo-300']
    },
    {
      name: 'Projects',
      icon: <FontAwesomeIcon className='mr-1 text-orange-400' icon={['fas', 'project-diagram']} />,
      content: (
      <>
      <div className='flex flex-wrap'>
        {projects.map((project, i) =>
          <StyledCard
          key={i}
          href={project.href}
          title={project.title}
          label={project.label}
          name={project.name}
          image={project.image}
          content={project.content}
          />
        )}
      </div>
      </>
      ),
      color: ['border-orange-400', 'hover:border-orange-300']
    },
    {
      name: 'Socials',
      icon: <FontAwesomeIcon className='mr-1 text-rose-400' icon={['fas', 'share-alt']}/>,
      content: (
        <div className='flex flex-wrap'>
          {
            socials.map((social, i) => <SocialCard
            key={i}
            content={social.content}
            description={social.description}
            color={social.color}
            icon={social.icon}
            href={social.href}
            />)
          }
        </div>
      ),
      color: ['border-rose-400', 'hover:border-rose-300']
    }
  ]

  // text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none active:text-blue-500 active:border-b-2 active:font-medium border-blue-500

  return (
  <>
    <div className='px-3 py-3 bg-gradient-to-br from-green-400 to-cyan-500 min-h-screen'>
      <div>
        <p className='text-white text-7xl mt-10 text-center'>Adriel J.</p>
        <p className='mt-2 text-gray-800 font-bold text-xl text-center text-opacity-50'>Software developer</p>
        <div className="flex flex-row mt-10 justify-center">
          {tabs.map((tab, i) => {
            return (
            <span key={i}>
              <TabButton icon={tab.icon} isActive={i == active} name={tab.name} color={tab.color} onClick={() => setActive(i)} />
            </span>
            )
          })}
        </div>
      </div>
      <Card>
        {tabs[active].content}
      </Card>
      <div className='p-8'>
        <p className='text-white font-medium text-opacity-50 text-center'>Adriel J. &copy; 2021</p>
      </div>
    </div>
  </>
  )
}
