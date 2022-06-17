import Image from 'next/image';
import Container from '../Common/Container';
import Grid from '../Common/Grid';

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-navbar-bg">
        <Container>
          <Grid>
            <div className="col-span-2 flex items-center">
              <Image width={97} height={78} src="/logo-art.png" alt="Logo" />
            </div>
            <div className="col-span-4 col-end-13 flex items-center justify-end gap-10">
              <a
                href=""
                className="transition-all text-white border-b-transparent hover:text-brand-primary text-xl py-[30px]  border-b-4 hover:border-brand-primary"
              >
                Gallery
              </a>
              <a
                href=""
                className="transition-all text-white border-b-transparent text-xl py-[30px] border-b-4 hover:border-brand-primary hover:text-brand-primary"
              >
                Contact us
              </a>
            </div>
          </Grid>
        </Container>
      </div>
    </>
  );
}