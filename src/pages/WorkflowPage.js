import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function WorkflowPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                {props.workflow.images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description}
                    className='workflow-img border-gold mb-5 ml-0 ml-xl-5 mb-xl-0' />)}
                <p className='lead'>
                    My workflow has been, is and will always be a constant work-in-progress. As I learn and evolve as a developer,
                    I strive to incorporate the new tips, tools, methods and applications I discover that provide greater efficiency to my performance. I've listed out the main components that are typically involved in my everyday workflow, such as equipment,
                    development tools and productivity applications as well as links to where to find each product for purchase.
                        </p>
                <h2>Equipment</h2>
                <ul>
                    <li>I use a <a href="https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop/xn9500cto212s"
                        target="_blank">Dell XPS 15 9500 Touch</a> with i9 Processor, 3TB of internal storage and
                    64GB of installed RAM, running on <a href="https://www.microsoft.com/en-us/p/windows-10-pro/" target="_blank">Windows 10 Pro</a>. </li>
                    <li>My screen extends with the <a href="https://www.lg.com/us/monitors/lg-34wn80c-b-ultrawide-monitor" target="_blank">LG 34WN80C-B 34 Inch UltraWide™</a> as an external monitor. </li>
                    <li>I test iOS with the <a href="" target="_blank">Mac Book Pro 13 WHAT</a>, <a href="" target="_blank">iPad WHAT</a>,
                     and <a href="" target="_blank">iPhone 10 XS Max.</a></li>
                    <li>I key with the <a href="https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/Wireless-Keyboards/K63-Wireless-Mechanical-Gaming-Keyboard-and-Gaming-Lapboard-Combo-%E2%80%94-Blue-LED-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9515031-NA"
                        target="_blank">Corsair K63 Wireless Mechanical Gaming Keyboard
                    and Gaming Lapboard Combo – Blue LED – Cherry MX Red</a>.</li>
                    <li>I scroll with the <a href="https://www.jellycomb.com/collections/mice/products/mv045-ergonomic-mouse"
                        target="_blank">Jelly Comb MV045 Ergonomic Mouse</a>.</li>
                    <li>I prefer to use the <a href="https://www.logitech.com/en-us/product/hd-webcam-c615"
                        target="_blank">Logitech HD Webcam C615</a> over the built-in webcam.</li>
                    <li>I use the <a href="https://www.amazon.com/Neewer-Advanced-Multiple-3200-5600K-Included/dp/B07ZF5V9LZ/ref=pd_lpo_421_t_2/133-6234101-5304966?_encoding=UTF8&pd_rd_i=B07ZF5V9LZ&pd_rd_r=c0d42005-dff6-46d4-b8ba-fa108a444eb3&pd_rd_w=xSkbb&pd_rd_wg=JxjL6&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=Z3V5Y3E66JTGETXANDSB&psc=1&refRID=Z3V5Y3E66JTGETXANDSB"
                        target="_blank">Neewer Advanced 18-inch LED Ring Light</a> when I need optimum lighting.</li>
                    <li>For noise proofing, I listen with either the <a href="https://www.sony.com/electronics/headband-headphones/wh-1000xm4"
                        target="_blank">Sony WH-100XM4 Wireless</a> or the
                    <a href="https://www.bose.com/en_us/support/products/bose_headphones_support/bose_around_ear_headphones_support/quietcomfort-25-acoustic-noise-cancelling-headphones-apple-devices.html"
                            target="_blank">Bose QuietComfort 25</a>.</li>
                    <li>I print with the <a href="https://www.usa.canon.com/internet/portal/us/home/products/details/printers/inkjet-single-function/ip-series/ip8720"
                        target="_blank">Canon Pixma iP8720</a>.</li>
                </ul>
                <h2>Development Tools</h2>
                <ul>
                    <li>I back up my work to <a href="https://www.github.com/" target="_blank">Github</a> and every file to
                    <a href="https://drive.google.com/" target="_blank">Google Drive</a> and
                    <a href="https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage" target="_blank">OneDrive</a>. </li>
                    <li>As per work, I use <a href="" target="_blank">Visual Studio</a> for my IDE.</li>
                    <li>As per personal, I use <a href="https://atom.io/" target="_blank">Atom</a> as my text editor,
                    with <a href="https://atom.io/packages/vim-mode-plus" target="_blank">Vim mode</a> installed.</li>
                    <li>My terminal of choice is <a href="" target="_blank">PowerShell</a>.</li>
                    <li>For local testing and FTP management, I use <a href="" target="_blank">FileZilla</a>
                     and <a href="" target="_blank">XAMPP</a>.</li>
                    <li>I debug with <a href="" target="_blank">DevTools</a> and <a href="" target="_blank">Firebug</a>.</li>
                    <li>I check for accessibility with <a href="" target="_blank">WAVE</a>, <a href="" target="_blank">NVDA</a>,
                     and <a href="" target="_blank">Lighthouse</a></li>
                    <li>My favorite frameworks are <a href="" target="_blank">Bootstrap</a> and <a href="" target="_blank">jQuery</a></li>
                    <li>I use <a href="" target="_blank">yarn</a> and <a href="" target="_blank">npm</a> for package management. </li>
                    <li>I use <a href="" target="_blank">gulp</a> to concatenate and <a href="" target="_blank">uglify</a> (minify) files.</li>
                    <li>I style with <a href="" target="_blank">Sass</a> and <a href="" target="_blank">Less</a>.</li>
                    <li>I use <a href="" target="_blank">BrowserStack</a> to test across browsers, operating systems and devices.</li>
                    <li>When I hit a roadblock, I turn to <a href="" target="_blank">Stackoverflow</a>. </li>
                </ul>
                <h2>Productivity Apps</h2>
                <ul>
                    <li>I use <a href="" target="_blank">AquaSnap </a> as my window management tool.</li>
                    <li>I design with <a href="" target="_blank">Photoshop</a>, <a href="" target="_blank">Illustrator</a>, and <a href="" target="_blank">XD</a>.</li>
                    <li>For scheduling, I use <a href="" target="_blank">Google Calendar</a>.</li>
                    <li>For general note-taking and to-dos, I prefer <a href="" target="_blank">Evernote</a>.</li>
                    <li>For project tasks, I’ve grown accustomed to <a href="" target="_blank">Git Projects</a>, <a href="" target="_blank">Jira</a>
                    and <a href="" target="_blank">Workfront</a>.</li>
                    <li>I use <a href="" target="_blank">Outlook</a> for my email client.</li>
                    <li>I'm a big fan of <a href="https://evernote.com/" target="_blank">Evernote</a> for note-taking.</li>
                    <li>I use <a href="https://justgetflux.com/" target="_blank">f.lux</a> to protect my vision. </li>
                    <li>I spellcheck and proofread with <a href="" target="_blank">Grammarly</a>.</li>
                </ul>
            </Content>
        </div >
    );

}

export default WorkflowPage;