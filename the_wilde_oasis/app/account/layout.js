import SideNavigation from "../_components/SideNavigation"
export const metadata = {
    title:"Guest area"
}
function Layout({ children }) {
    return (
        <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
            <SideNavigation />
            <div className="py-1">
                {children}
            </div>

        </div>
    )
}

export default Layout
