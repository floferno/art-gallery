import Container from '@/components/Common/Container'
import Grid from '@/components/Common/Grid'
import Sidebar from '@/components/GalleryDetails/Sidebar'
import Thumbnails from '@/components/GalleryDetails/Thumbnails'
import Layout from '@/components/Layout/Layout'

import Image from 'next/image'
import React from 'react'

const GalleryDetails = () => {
  return (
    <Layout>
      <Thumbnails />
      <Container className={'mb-52'}>
        <Grid className={'pt-11'}>
          <div className="cols-span-1 lg:col-span-2 h-full hidden sm:block">
            <Sidebar />
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-10 flex flex-col gap-7">
           
            <h6 className="text-xl font-semibold font-sf-pro">
              Lörem ipsum intravask askap kromovis, jag nåktigt.{' '}
            </h6>
            <p>
              Lörem ipsum infrabel tibelt dena teng i kravallant laligt autokon,
              bask. Semigisk krona, oaktat spen, i saskapet laråsm hemilig samt
              suling i däre fast tidehet astrong pejåbelt, i hemir om ände i
              semibönade dinade tesm. Selungen dinar, telessa kavis bevuk podade
              geonyde tär. Bakäns ladong det vill säga heteronas för att plans
              och tegon och kara prorade lasat multina obel därför att maning.
              Laddhybrid petabyte eftersom mining men netegt päsam: okorade har
              cykelbox, anan för att toda planade infraska, förutom prelogi i
              ner, däsam nenygisk inte känera. Lurar musam niment: biossade i
              polyning, mobildagis sotusessa murade primafiering or.
            </p>
            <p>
              Industrisafari temposion rågigt obuligen och pretägt prov puktigt
              råvabel eftersom relagon tiskapet. Fuliga köns, oska behet.
              Beledes monodera emedan nylörade. Trav blåbrun vakärar donde ör
              suliga för börsrobot i kasongar medan kagisk polystik peköktiga
              inde ett prede sedan sest, möra divuvybelt. Tösam köning om
              kasoling mödäl jånar. Zlatanera ninera, reande fast parare sorade
              sabösam koheten vid semin preneskap sedan anteskapet, heterosk
              mötertad hufolig ajåhet pusade bell. Apfälla täledes i åkrosk i
              monor diktig social turism än sabel. Sun tälig, kol prortad. Panat
              hurökal dissa krorade emedan der beligen kast mabel diagt dossade
              krolig vism lubass, krohet ovusk heteroböna. Kyseheten orade kada
              kavipreras inte sykalig parade synyse megast, kasade, de prening
              biosm, innan nirat trirent i inynde diasm i mandatpingis. Tänade
              lavis tills kaninade nertad tills automent sarade selur i niss jag
              soligt även om pres, bärårås onenat mosamma. Bev stenov: med mung.
            </p>
            <div className="w-full h-[337px] relative overflow-hidden">
              <Image
                src={'/gallery-details/thumbnails.png'}
                alt="thumbnails"
                layout="fill"
                objectFit={'cover'}
              />
            </div>
            <p>
              Povis al päpåde pobav trelude i rågon, fast deplar dämus ner dos
              respektive predänat medan vyditura geng, eugon. Faliga råkamöra
              huruvida attefallshus dikyskade, är ytongen kaning kvasirår
              pseudoskapet heteroll dirar tidat pompekunskap inte vabant avihet
              dira råvavis flipperförälder. Annonsblockerare benat, jypände
              enera eftersom man alltså influerare päban.{' '}
            </p>
            <p>
              Nat serade möbelhund som plakygisk astronande geojön dekasaskapet,
              en dirat eftersom nen monopoktig nerat pomösat täng trast i vang.
              Idäbel neskapet pseudodade sel blåljusyrke, inte plalarade inte
              monissa eren medan opohet best cynnetik och kalig lören. Deling
              prertad neogam enfaktisk lasesade ana i anavin äsona den subälogi,
              huligt än yn reskapet är tritik bingar tvåkönsnorm. Nimös mibal
              vint råskapet kodade, förutom ör rådivis medan dibarångar såsom
              banel plus planidade om posper i nyr mugt liksom ediligt. Trisat
              mononar än detisagen sav. Dekanera megapp och epidäligt och
              vuvaska jöda sedan bepon i kadär i pretebel.{' '}
            </p>
            <p>
              Koskap bajödade bagen morotsmobb, ade åråras oråktig, i neskapet
              sona proras pulig diska geon. Nerväxt rer trende, svenna sitt liv.
              Eubenas rell kad inte polilogi bokstav som mid att synform i
              råköngar. Pseudobak krosade då miskap exor de påvis, heteronde
              fastän dide polysa givomat fast bioform. Dekar dohurat att
              intrafur, böbädäledes, trire. Kokament balig växtmjölk. Du kan
              vara drabbad. Punde predade: kasenade klickfarm böpp farad
              astrodenat robotjournalistik köss euron. Bebask posohet nibude
              exoligen. Panade gevis innan flexicurity förutom nekäpäment
              huruvida egoren innan sufabade, lude. Elgasbil or i megav ving sar
              och prel kronade posk. Bikangar gese har pejårtad klimatism
              primastat och doning susade koss klimathot pertotal okyvinar inte
              sument, då petöv då tukroligt, medan pungen behet dävuliga. Are
              solingar om peming.
            </p>
            <div className="aspect-video">
              <iframe
                src={'https://www.youtube.com/embed/' + 'v=_Uv0AMeYcwg'}
                title={'video title'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

export default GalleryDetails
