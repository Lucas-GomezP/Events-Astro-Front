import { useState, useEffect } from "react"
import {Left, Right} from '../icons/IconsReact'

export const SliderEvents = ({events}) => {
  const [actualSlide, setActualSlide] = useState(0)

  const handleChangeSlide = (n) => {
    let newActualSlide = actualSlide + n
    if (newActualSlide > events.length - 1) {
      newActualSlide = 0
    }
    if (newActualSlide < 0) {
      newActualSlide = events.length - 1
    }
    setActualSlide(newActualSlide)
  }

  const handleChangeSlideByBtn = (n) => {
    const newActualSlide = n
    setActualSlide(newActualSlide)
  }

  const autoChangeSlide = () => {
    handleChangeSlide(1)
  }

  useEffect(() => {
    const interval = setInterval(autoChangeSlide, 5000)
    return () => clearInterval(interval)
  }, [actualSlide])
  
  return (
    <section
      className="relative flex justify-between"
    >
      <button
        className="text-white w-fit absolute top-1/2 z-30 bg-zinc-400/50 rounded-2xl p-1"
        onClick={() => handleChangeSlide(-1)}
      >
        <Left className="text-3xl font-bold mr-1" />
      </button>
      <div
        className="relative max-h-96 w-full"
      >
        {
          events?.map((event, i) => <SlideEvent event={event?.name} href={event?.href} index={i} actualSlide={actualSlide} key={event?.id}/>)
        }
        <div 
          className="absolute bottom-2 w-full z-30 flex flex-row justify-center gap-2"
        >
          {
            events?.map((e, i) => {
              return (
                <button
                  key={i}
                  className={`bg-zinc-400 border size-4 rounded-full ${i === actualSlide ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                  onClick={() => handleChangeSlideByBtn(i)}
                >
                </button>
              )
            })
          }
        </div>
      </div>
      <button
        className="text-white w-fit absolute top-1/2 right-0 z-30 bg-zinc-400/50 rounded-2xl p-1"
        onClick={() => handleChangeSlide(1)}
      >
        <Right className="text-3xl font-bold ml-1" />
      </button>
    </section>
  )
}

const SlideEvent = ({href, name, index, actualSlide}) => {
  return (
    <div
      className={`relative h-full justify-center ${index === actualSlide ? 'flex' : 'hidden'}`}
    >
      <img 
        src={href} 
        alt={`${name} de fondo`}
        className="absolute top-0 blur-md object-fill w-full h-full z-10 p-4"
      />
      <img 
        src={href} 
        alt={name}
        className="relative object-contain h-96 z-20 items-center"
      />
    </div>
  )
}