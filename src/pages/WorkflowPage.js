import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function WorkflowPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <div className='d-flex justify-content-between'>
                    {props.workflow.images.map(({ id, src, title, description }) => <img key={id} src={src} title={title} alt={description}
                        className='workflow-img d-inline-block border-gold m-0 mb-5' />)}
                </div>
                <p className='lead mb-5'>
                    My workflow has been, is and will always be a constant work-in-progress. As I learn and evolve as a developer,
                    I try my best to incorporate the new tips, methods and tools I discover that improve my performance. I've listed out the main components involved in my daily workflow, such as equipment,
                    development tools and productivity applications as well as links to purchase or download. Feel free to reach out to me with any questions!
                        </p>
                <h2>Equipment</h2>
                <ul class="mb-5">
                    <li>I use a <a href='https://www.dell.com/en-us/shop/cty/pdp/spd/xps-15-9500-laptop/xn9500cto212s'
                        target='_blank' rel='noopener noreferrer'>Dell XPS 15 9500 Touch</a> with i9 Processor, 3TB of internal storage and
                    64GB of installed RAM, running on <a href='https://www.microsoft.com/en-us/p/windows-10-pro/' target='_blank' rel='noopener noreferrer'>Windows 10 Pro</a>. </li>
                    <li>My screen extends with the <a href='https://www.lg.com/us/monitors/lg-34wn80c-b-ultrawide-monitor' target='_blank' rel='noopener noreferrer'>LG 34WN80C-B 34 Inch UltraWide™</a> as an external monitor. </li>
                    <li>I test iOS with the <a href='https://support.apple.com/kb/sp583?locale=en_US' target='_blank' rel='noopener noreferrer'>Mac Book Pro (13-inch, Mid 2010)</a>, <a href='https://www.apple.com/ipad-10.2/' target='_blank' rel='noopener noreferrer'>iPad (10.2-inch)</a>,
                     and <a href='https://www.apple.com/shop/refurbished/iphone/iphone-xs-max' target='_blank' rel='noopener noreferrer'>iPhone XS Max.</a></li>
                    <li>I key with the <a href='https://www.corsair.com/us/en/Categories/Products/Gaming-Keyboards/Wireless-Keyboards/K63-Wireless-Mechanical-Gaming-Keyboard-and-Gaming-Lapboard-Combo-%E2%80%94-Blue-LED-%E2%80%94-CHERRY%C2%AE-MX-Red/p/CH-9515031-NA'
                        target='_blank' rel='noopener noreferrer'>Corsair K63 Wireless Mechanical Gaming Keyboard
                    and Gaming Lapboard Combo – Blue LED – Cherry MX Red</a>.</li>
                    <li>I scroll with the <a href='https://www.jellycomb.com/collections/mice/products/mv045-ergonomic-mouse'
                        target='_blank' rel='noopener noreferrer'>Jelly Comb MV045 Ergonomic Mouse</a>.</li>
                    <li>I prefer to use the <a href='https://www.logitech.com/en-us/product/hd-webcam-c615'
                        target='_blank' rel='noopener noreferrer'>Logitech HD Webcam C615</a> over the built-in webcam.</li>
                    <li>I use the <a href='https://www.amazon.com/Neewer-Advanced-Multiple-3200-5600K-Included/dp/B07ZF5V9LZ/ref=pd_lpo_421_t_2/133-6234101-5304966?_encoding=UTF8&pd_rd_i=B07ZF5V9LZ&pd_rd_r=c0d42005-dff6-46d4-b8ba-fa108a444eb3&pd_rd_w=xSkbb&pd_rd_wg=JxjL6&pf_rd_p=7b36d496-f366-4631-94d3-61b87b52511b&pf_rd_r=Z3V5Y3E66JTGETXANDSB&psc=1&refRID=Z3V5Y3E66JTGETXANDSB'
                        target='_blank' rel='noopener noreferrer'>Neewer Advanced 18-inch LED Ring Light</a> when I need optimum lighting.</li>
                    <li>For noise proofing, I listen with either the <a href='https://www.sony.com/electronics/headband-headphones/wh-1000xm4'
                        target='_blank' rel='noopener noreferrer'>Sony WH-100XM4 Wireless</a> or the <a href='https://www.bose.com/en_us/support/products/bose_headphones_support/bose_around_ear_headphones_support/quietcomfort-25-acoustic-noise-cancelling-headphones-apple-devices.html'
                            target='_blank' rel='noopener noreferrer'>Bose QuietComfort 25</a>.</li>
                    <li>I print with the <a href='https://www.usa.canon.com/internet/portal/us/home/products/details/printers/inkjet-single-function/ip-series/ip8720'
                        target='_blank' rel='noopener noreferrer'>Canon Pixma iP8720</a>.</li>
                </ul>
                <h2>Development Tools</h2>
                <ul class="mb-5">
                    <li>I back up my work to <a href='https://www.github.com/' target='_blank' rel='noopener noreferrer'>Github</a> and every file to <a href='https://drive.google.com/' target='_blank' rel='noopener noreferrer'>Google Drive</a> and <a href='https://www.microsoft.com/en-us/microsoft-365/onedrive/online-cloud-storage' target='_blank' rel='noopener noreferrer'>OneDrive</a>. </li>
                    <li>As per work, I use <a href='https://visualstudio.microsoft.com/' target='_blank' rel='noopener noreferrer'>Visual Studio</a> for my IDE.</li>
                    <li>As per personal, I use <a href='https://atom.io/' target='_blank' rel='noopener noreferrer'>Atom</a> as my text editor,
                    with <a href='https://atom.io/packages/vim-mode-plus' target='_blank' rel='noopener noreferrer'>Vim mode</a> installed.</li>
                    <li>My terminal of choice is <a href='https://docs.microsoft.com/en-us/powershell/' target='_blank' rel='noopener noreferrer'>PowerShell</a>.</li>
                    <li>For FTP, I use <a href='https://filezilla-project.org/' target='_blank' rel='noopener noreferrer'>FileZilla</a>.</li>
                    <li>For local testing, I use <a href='https://www.apachefriends.org/index.html' target='_blank' rel='noopener noreferrer'>XAMPP</a>.</li>
                    <li>I debug with <a href='https://developers.google.com/web/tools/chrome-devtools' target='_blank' rel='noopener noreferrer'>Dev Tools</a> and <a href='https://www.mozilla.org/en-US/firefox/developer/' target='_blank' rel='noopener noreferrer'>Firefox Developer</a>.</li>
                    <li>I check for accessibility with <a href='https://wave.webaim.org/' target='_blank' rel='noopener noreferrer'>WAVE</a>, <a href='https://www.nvaccess.org/' target='_blank' rel='noopener noreferrer'>NVDA</a>, and <a href='https://developers.google.com/web/tools/lighthouse' target='_blank' rel='noopener noreferrer'>Lighthouse</a>.</li>
                    <li>My favorite CSS framework is <a href='https://getbootstrap.com/' target='_blank' rel='noopener noreferrer'>Bootstrap</a>.</li>
                    <li>My favorite JavaScript framework is <a href='https://jquery.com/' target='_blank' rel='noopener noreferrer'>jQuery</a>.</li>
                    <li>My favorite JavaScript library is <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>React</a>.</li>
                    <li>I use <a href='https://classic.yarnpkg.com/en/' target='_blank' rel='noopener noreferrer'>Yarn</a> and <a href='https://www.npmjs.com/' target='_blank' rel='noopener noreferrer'>Npm</a> for package management. </li>
                    <li>I use <a href='https://gulpjs.com/' target='_blank' rel='noopener noreferrer'>Gulp</a> to minify, uglify, and concatenate files.</li>
                    <li>I style with <a href='https://sass-lang.com/' target='_blank' rel='noopener noreferrer'>Sass</a> and <a href='http://lesscss.org/' target='_blank' rel='noopener noreferrer'>Less</a>.</li>
                    <li>I use <a href='https://www.browserstack.com/' target='_blank' rel='noopener noreferrer'>BrowserStack</a> to test browsers, operating systems and devices.</li>
                    <li>When I hit a roadblock, I turn to <a href='https://stackoverflow.com/' target='_blank' rel='noopener noreferrer'>Stack Overflow</a>. </li>
                </ul>
                <h2>Productivity Apps</h2>
                <ul class="mb-5">
                    <li>I use <a href='https://www.nurgo-software.com/products/aquasnap' target='_blank' rel='noopener noreferrer'>AquaSnap </a> as my window management tool.</li>
                    <li>I design with <a href='https://www.adobe.com/products/photoshop.html' target='_blank' rel='noopener noreferrer'>Photoshop</a>, <a href='https://www.adobe.com/products/illustrator.html' target='_blank' rel='noopener noreferrer'>Illustrator</a>, and <a href='https://www.adobe.com/products/xd.html' target='_blank' rel='noopener noreferrer'>XD</a>.</li>
                    <li>For scheduling, I use <a href='https://calendar.google.com/' target='_blank' rel='noopener noreferrer'>Google Calendar</a>.</li>
                    <li>For general note-taking and to-dos, I prefer <a href='https://evernote.com/' target='_blank' rel='noopener noreferrer'>Evernote</a>.</li>
                    <li>For project tasks, I’ve grown accustomed to <a href='https://github.com/features/project-management/' target='_blank' rel='noopener noreferrer'>Git Projects</a>, <a href='https://www.atlassian.com/software/jira' target='_blank' rel='noopener noreferrer'>Jira</a> and <a href='https://www.workfront.com/' target='_blank' rel='noopener noreferrer'>Workfront</a>.</li>
                    <li>I use <a href='https://outlook.live.com/' target='_blank' rel='noopener noreferrer'>Outlook</a> for my email client.</li>
                    <li>I use <a href='https://justgetflux.com/' target='_blank' rel='noopener noreferrer'>f.lux</a> to protect my vision. </li>
                    <li>I spell-check with <a href='https://grammarly.com/' target='_blank' rel='noopener noreferrer'>Grammarly</a>.</li>
                </ul>
            </Content>
        </div>
    );

}

export default WorkflowPage;