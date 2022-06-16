import NavItem from "../Common/NavItem"

export default function Navbar(){
    return (
      <>
        <div className="flex w3/12 justify-start">
               Artmazigh  
            </div>  
            <div className="w3/12 text-white">
              <ul className="flex justify-end space-x-10">
                <NavItem>Gallery</NavItem> 
                <NavItem>Contact</NavItem> 
              </ul> 
            </div> 
      </> 
    )
}