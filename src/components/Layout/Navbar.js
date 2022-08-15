import Image from 'next/image'
import Link from 'next/link'
import Container from '../Common/Container'
import Grid from '../Common/Grid'

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-[#191E29]">
        <Container>
          <Grid>
            <div className="col-span-2 flex items-center">
              <Link href={'/'} passHref>
                <a className="overflow-hidden w-[34px] h-[28px] md:w-[46px] md:h-[36px] lg:w-[97px] lg:h-[78px] object-cover relative">
                  <Image
                    width={97}
                    height={78}
                    src="/logo-art.png"
                    alt="Logo"
                    objectFit="fill"
                    layout="fill"
                  />
                </a>
              </Link>
            </div>
            <div className="font-prettywise col-span-2 lg:col-span-4 lg:col-end-13 flex items-center justify-end gap-4 sm:gap-10">
              <Link href={'/gallery'}>
                <a className="transition-all text-white border-b-transparent hover:text-brand-primary text-base lg:text-xl py-5 sm:py-[30px]  border-b-4 hover:border-brand-primary">
                  Gallery
                </a>
              </Link>
              <Link href={'/contact'}>
                <a className="transition-all text-white border-b-transparent text-base lg:text-xl py-5 sm:py-[30px] border-b-4 hover:border-brand-primary hover:text-brand-primary">
                  Contact us
                </a>
              </Link>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  )
}
