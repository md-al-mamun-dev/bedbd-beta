import AddListing from "./AddListing"
import PropertyProvider from "@/context/property/propertyContext"

export default function page() {
  return (
    <PropertyProvider>
        <AddListing/>
    </PropertyProvider>
  )
}
