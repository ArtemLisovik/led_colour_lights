import { NewsBlockItem } from '../NewsBlockItem/NewsBlockItem'
import './NewsBlockList.scss'

import image from 'assets/img/avatar__2.webp'

export const NewsBlockList = () => {
  return (
    <section className="news">
      <div className="news__inner">
       
        <NewsBlockItem
        title='Lorem'
        text='Lorem dfasdsaadsadas'
        image={image}
        />
        <NewsBlockItem
        title='Lorem'
        text='Lorem dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa dlas,ld ,asl, dlsa,d las,l d,adsadas em dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa em dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa em dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa'
        image={image}
        />

<NewsBlockItem
        title='Lorem'
        text='Lorem dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa dlas,ld ,asl, dlsa,d las,l d,adsadas em dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa em dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa em dfasdsaaasdasdasdlasdl,a sd, alsd, lsa,d la,sdl ,asld ,asl,d las,ld ,asl,d lsa'
        image={image}
        />

<NewsBlockItem
        title='Lorem'
        text='Lorem dfasdsaaasdasdasdlasdl,a sd, als,d las,ld ,asl,d lsa'
        image={image}
        />

      </div>
    </section>
  )
}
