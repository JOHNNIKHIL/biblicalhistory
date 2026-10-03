import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'The Biblical World — Historical Master Timeline',description:'A source-critical historical timeline connecting biblical narratives with archaeology, inscriptions, imperial records and ancient historians.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
