import React, { useMemo, useState } from "react";
import {
  ArrowRight, BarChart3, BookOpen, BriefcaseBusiness, CheckCircle2,
  ChevronDown, CircleUserRound, Cloud, FileText, GraduationCap, Home,
  LayoutDashboard, Lightbulb, LogOut, Menu, Rocket, Search, Settings,
  Sparkles, Target, Upload, User, X, Zap
} from "lucide-react";

const API = "http://127.0.0.1:8000/api";

const skillData = [
  ["Python", "Advanced", "Advanced", 0],
  ["SQL", "Intermediate", "Advanced", 1],
  ["Machine Learning", "Beginner", "Intermediate", 2],
  ["Data Visualization", "Intermediate", "Advanced", 1],
  ["Cloud (AWS)", "Beginner", "Intermediate", 2]
];

function Pill({children, type="blue"}) {
  const styles = {
    blue: "bg-indigo-50 text-indigo-600",
    green: "bg-emerald-50 text-emerald-600",
    orange: "bg-orange-50 text-orange-600",
    pink: "bg-pink-50 text-pink-600"
  };
  return <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${styles[type]}`}>{children}</span>;
}

function Logo() {
  return <div className="flex items-center gap-2 font-bold text-[15px]"><span className="grid place-items-center w-7 h-7 rounded-lg bg-indigo-600 text-white"><Sparkles size={15}/></span>CareerAI</div>;
}

function Sidebar({page, setPage, mobile, close}) {
  const items = [
    ["Dashboard", LayoutDashboard], ["My Profile", CircleUserRound], ["Analysis", BarChart3],
    ["Learning Roadmap", Target], ["Resources", BookOpen], ["Settings", Settings]
  ];
  return <aside className={`${mobile ? "fixed z-50 left-0 top-0 h-full w-72" : "hidden md:flex w-60"} bg-white border-r border-slate-100 flex-col`}>
    <div className="h-16 px-5 flex items-center justify-between border-b border-slate-100"><Logo/>{mobile && <button onClick={close}><X/></button>}</div>
    <nav className="p-3 space-y-1">
      {items.map(([label,Icon])=><button key={label} onClick={()=>{setPage(label); close?.()}} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm ${page===label ? "bg-indigo-50 text-indigo-600 font-semibold" : "text-slate-500 hover:bg-slate-50"}`}><Icon size={17}/>{label}{label==="Learning Roadmap"&&<ChevronDown className="ml-auto" size={15}/>}</button>)}
    </nav>
    <div className="mt-auto p-5"><button className="flex items-center gap-3 text-sm text-slate-500"><LogOut size={17}/>Logout</button></div>
  </aside>
}

function Topbar({setMobile}) {
  return <header className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-5 md:px-8">
    <button className="md:hidden text-slate-600" onClick={()=>setMobile(true)}><Menu/></button>
    <div className="hidden md:block text-sm text-slate-400">Career progress & skill gap analysis</div>
    <div className="flex items-center gap-3 ml-auto"><div className="w-8 h-8 rounded-full bg-indigo-100 grid place-items-center text-indigo-600 text-xs font-bold">TE</div><span className="text-sm font-semibold hidden sm:block">Thillai Eswari</span><ChevronDown size={15} className="text-slate-400"/></div>
  </header>
}

function Dashboard({setPage, upload}) {
  return <div>
    <div className="mb-7"><h1 className="text-2xl md:text-3xl font-bold text-slate-900">Welcome back, Thillai Eswari! 👋</h1><p className="text-sm text-slate-500 mt-1">Here's your career progress and skill gap analysis.</p></div>
    <div className="grid lg:grid-cols-[1fr_310px] gap-5">
      <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-6 flex flex-col sm:flex-row items-center gap-7">
        <div className="relative w-32 h-32 shrink-0 rounded-full grid place-items-center" style={{background:"conic-gradient(#18c7ae 0 25%, #5564f4 25% 72%, #e9eef9 72% 100%)"}}>
          <div className="w-24 h-24 bg-white rounded-full grid place-items-center flex-col"><span className="text-3xl font-bold text-slate-800">72%</span><span className="text-[10px] text-indigo-500 font-semibold">Readiness Score</span></div>
        </div>
        <div><div className="flex items-center gap-3"><h2 className="text-xl font-bold">Data Engineer</h2><Pill type="green">Good Progress</Pill></div><p className="text-sm text-slate-500 mt-2">Target Career</p><p className="text-sm text-slate-500 mt-3">You're 72% ready for this career. Keep going!</p></div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 shadow-soft p-5"><h3 className="font-bold mb-4">Quick Actions</h3>
        <button onClick={upload} className="w-full border border-indigo-100 rounded-xl p-3 flex items-center gap-3 text-left hover:bg-indigo-50"><Upload size={17} className="text-indigo-600"/><span><b className="block text-sm">Upload Resume</b><small className="text-slate-400">PDF, DOCX (Max 5MB)</small></span><ArrowRight className="ml-auto" size={15}/></button>
        <button onClick={()=>setPage("My Profile")} className="w-full border border-indigo-100 rounded-xl p-3 flex items-center gap-3 text-left mt-3 hover:bg-indigo-50"><Target size={17} className="text-indigo-600"/><span><b className="block text-sm">Set Target Career</b><small className="text-slate-400">Choose your dream role</small></span><ArrowRight className="ml-auto" size={15}/></button>
        <button onClick={()=>setPage("Analysis")} className="w-full border border-indigo-100 rounded-xl p-3 flex items-center gap-3 text-left mt-3 hover:bg-indigo-50"><BarChart3 size={17} className="text-indigo-600"/><span><b className="block text-sm">View Analysis</b><small className="text-slate-400">See detailed skill gap report</small></span><ArrowRight className="ml-auto" size={15}/></button>
      </div>
    </div>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      {[["4","Skills Matched","green"],["3","Skills to Improve","pink"],["2","Recommended Projects","blue"],["1","Learning Path","orange"]].map(([n,l,c])=><div key={l} className="bg-white border border-slate-100 rounded-2xl p-5"><div className={`text-2xl font-bold ${c==="pink"?"text-rose-500":c==="orange"?"text-orange-500":c==="blue"?"text-indigo-500":"text-emerald-500"}`}>{n}</div><div className="text-xs text-slate-500 mt-1">{l}</div></div>)}
    </div>
    <div className="bg-white border border-slate-100 rounded-2xl mt-5 p-5"><div className="flex justify-between items-center mb-4"><h3 className="font-bold">Recent Activity</h3><button className="text-xs text-indigo-600">View All</button></div>
      {["Resume uploaded and analyzed","Skill gap analysis completed","Learning roadmap generated"].map((x,i)=><div key={x} className="flex items-center gap-3 py-3 border-t border-slate-50 text-sm"><span className="w-7 h-7 rounded-lg bg-indigo-50 grid place-items-center text-indigo-600">{i===0?<FileText size={14}/>:i===1?<CheckCircle2 size={14}/>:<BookOpen size={14}/>}</span><span>{x}</span><span className="ml-auto text-xs text-slate-400">{i===2?"Yesterday":"Today"}</span></div>)}
    </div>
  </div>
}

function Landing({onStart}) {
  return <div className="min-h-screen bg-white">
    <header className="h-16 px-6 md:px-12 flex items-center justify-between border-b border-slate-100"><Logo/><nav className="hidden md:flex gap-8 text-sm text-slate-500"><a>Home</a><a>Features</a><a>About</a></nav><div className="flex gap-3 items-center"><button className="text-sm text-slate-600">Login</button><button onClick={onStart} className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg">Sign Up</button></div></header>
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-indigo-50/30 to-purple-50 px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"><div><h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">Find Your Career.<br/><span className="text-indigo-600">Discover Your Skill Gaps.</span></h1><p className="mt-6 text-slate-500 max-w-lg leading-7">Upload your resume, set your target career, and let AI analyze your skills, find gaps, and create a personalized learning roadmap to help you achieve your goals.</p><div className="flex gap-3 mt-8"><button onClick={onStart} className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-indigo-200">Get Started <ArrowRight className="inline ml-2" size={16}/></button><button className="border border-indigo-200 text-indigo-600 px-6 py-3 rounded-lg font-semibold">Learn More</button></div></div>
      <div className="bg-white rounded-3xl shadow-2xl shadow-indigo-100 border border-indigo-50 p-5 rotate-1"><div className="bg-slate-50 rounded-2xl p-5"><div className="flex items-center gap-4"><div className="w-24 h-24 rounded-full border-[10px] border-indigo-500 grid place-items-center font-bold">72%</div><div><h3 className="font-bold text-xl">Data Engineer</h3><p className="text-xs text-slate-400">Readiness Score</p><Pill type="green">Good Progress</Pill></div></div><div className="grid grid-cols-2 gap-3 mt-5">{["Python","SQL","Machine Learning","AWS"].map((s,i)=><div key={s} className="bg-white p-3 rounded-xl border border-slate-100 text-xs"><b>{s}</b><span className="block text-slate-400 mt-1">{i===0?"Advanced":i===1?"Intermediate":"Beginner"}</span></div>)}</div></div></div></div>
    </section>
    <section className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-4 gap-5">{[[BarChart3,"Skill Gap Analysis","Find what you're missing"],[BookOpen,"Personalized Roadmap","Learn at your own pace"],[GraduationCap,"Career Matching","Discover the best fit"],[FileText,"Learning Resources","Curated for your growth"]].map(([I,t,d])=><div className="flex gap-3" key={t}><span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center"><I size={18}/></span><div><b className="text-sm">{t}</b><p className="text-xs text-slate-400 mt-1">{d}</p></div></div>)}</section>
  </div>
}

function Analysis() {
  return <div><div className="flex flex-wrap justify-between items-start gap-3 mb-6"><div><h1 className="text-2xl font-bold">Skill Gap Analysis</h1><p className="text-sm text-slate-500 mt-1">Here's a detailed breakdown of your skills and what you need to improve.</p></div><button className="bg-indigo-600 text-white text-sm px-4 py-2.5 rounded-lg"><FileText className="inline mr-2" size={15}/>Download Report</button></div>
    <div className="bg-white border border-slate-100 rounded-2xl shadow-soft p-6"><div className="flex justify-between items-center"><div><h2 className="text-lg font-bold">Data Engineer</h2><p className="text-xs text-slate-400">Target Career</p></div><div className="text-right"><div className="text-2xl font-bold text-indigo-600">72%</div><p className="text-[10px] text-slate-400">Overall Readiness</p></div></div>
    <div className="flex gap-6 border-b border-slate-100 mt-6 overflow-auto"><button className="py-3 border-b-2 border-indigo-600 text-indigo-600 text-sm font-semibold whitespace-nowrap">Skills Overview</button><button className="py-3 text-slate-400 text-sm whitespace-nowrap">Skill Gaps</button><button className="py-3 text-slate-400 text-sm whitespace-nowrap">Recommendations</button></div>
    <div className="overflow-x-auto"><table className="w-full text-left mt-3 min-w-[650px]"><thead><tr className="text-xs text-slate-400 border-b"><th className="py-4">Skill</th><th>Your Level</th><th>Required Level</th><th>Gap</th></tr></thead><tbody>{skillData.map(([s,c,r,g])=><tr key={s} className="border-b border-slate-50 text-sm"><td className="py-4 font-semibold">{s}</td><td><Pill type={c==="Advanced"?"green":c==="Intermediate"?"blue":"orange"}>{c}</Pill></td><td><Pill type={r==="Advanced"?"green":"blue"}>{r}</Pill></td><td>{g===0?<span className="text-slate-300">—</span>:<span className="text-rose-500 font-semibold">+{g}</span>}</td></tr>)}</tbody></table></div></div>
  </div>
}

function Roadmap() {
  const stages=[["1. Foundation","Week 1–2",100,[["Python for Data Analysis (Beginner)","Completed"],["SQL Basics (Intermediate)","Completed"]]],["2. Core Skills","Week 3–6",50,[["Machine Learning with Python","In Progress"],["Data Visualization with Python","Not Started"]]],["3. Advanced","Week 7–12",0,[["Cloud Computing (AWS)","Not Started"],["Data Engineering Projects","Not Started"]]]];
  return <div><div className="flex justify-between items-start mb-7"><div><h1 className="text-2xl font-bold">Learning Roadmap</h1><p className="text-sm text-slate-500 mt-1">Your personalized plan to bridge the skill gaps and achieve your career goals.</p></div><select className="border rounded-lg px-3 py-2 text-sm"><option>3 Months</option></select></div><div className="bg-white border border-slate-100 rounded-2xl p-6">{stages.map(([title,week,pct,items],i)=><div className="relative pl-12 pb-10 last:pb-0" key={title}><div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-indigo-600 text-white grid place-items-center text-xs font-bold">{i+1}</div>{i<2&&<div className="absolute left-[13px] top-7 bottom-0 w-px bg-indigo-100"/>}<div className="flex justify-between"><div><h3 className="font-bold">{title}</h3><p className="text-xs text-slate-400 mt-1">{week}</p></div><span className="text-xs font-semibold text-indigo-500">{pct}%</span></div><div className="h-1 bg-slate-100 rounded-full mt-3"><div className="h-1 bg-indigo-500 rounded-full" style={{width:`${pct}%`}}/></div>{items.map(([name,status])=><div key={name} className="flex items-center gap-3 mt-4 text-sm"><span className={`w-7 h-7 rounded-lg grid place-items-center ${status==="Completed"?"bg-emerald-50 text-emerald-500":"bg-indigo-50 text-indigo-500"}`}>{status==="Completed"?<CheckCircle2 size={15}/>:<BookOpen size={15}/>}</span><span>{name}</span><span className={`ml-auto text-xs ${status==="Completed"?"text-emerald-500":"text-slate-400"}`}>{status}</span></div>)}</div>)}</div></div>
}

function Profile() {
  return <div><h1 className="text-2xl font-bold">My Profile</h1><p className="text-sm text-slate-500 mt-1">Manage your career preferences and skills.</p><div className="bg-white border border-slate-100 rounded-2xl p-6 mt-6 max-w-3xl"><div className="flex items-center gap-4 mb-7"><div className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 grid place-items-center text-xl font-bold">TE</div><div><h2 className="font-bold">Thillai Eswari</h2><p className="text-sm text-slate-400">Computer Science Engineering Student</p></div></div><label className="text-sm font-semibold">Target Career</label><select className="w-full mt-2 border border-slate-200 rounded-xl p-3"><option>Data Engineer</option><option>Backend Engineer</option><option>AI/ML Engineer</option></select><label className="text-sm font-semibold block mt-5">Skills</label><div className="flex flex-wrap gap-2 mt-2">{["Python","FastAPI","HTML","CSS","JavaScript","SQL","Git","React"].map(s=><Pill key={s}>{s}</Pill>)}</div><button className="mt-7 bg-indigo-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold">Save Changes</button></div></div>
}

function Resources() {
  return <div><h1 className="text-2xl font-bold">Learning Resources</h1><p className="text-sm text-slate-500 mt-1">Curated resources for the skills in your roadmap.</p><div className="grid md:grid-cols-3 gap-5 mt-6">{[["Python for Data Analysis", "Python", "Beginner", "BookOpen"],["SQL Basics", "SQL", "Intermediate", "Database"],["AWS Cloud Practitioner", "Cloud", "Beginner", "Cloud"]].map(([t,s,l])=><div className="bg-white border border-slate-100 rounded-2xl p-5" key={t}><div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 grid place-items-center mb-4"><BookOpen size={18}/></div><Pill>{s}</Pill><h3 className="font-bold mt-3">{t}</h3><p className="text-xs text-slate-400 mt-2">{l} · Recommended learning resource</p><button className="text-indigo-600 text-sm font-semibold mt-5">Start Learning <ArrowRight className="inline" size={14}/></button></div>)}</div></div>
}

function SettingsPage() {
  return <div><h1 className="text-2xl font-bold">Settings</h1><p className="text-sm text-slate-500 mt-1">Manage your CareerAI preferences.</p><div className="bg-white border border-slate-100 rounded-2xl mt-6 p-6 max-w-2xl space-y-5"><div><b className="text-sm">Email notifications</b><p className="text-xs text-slate-400 mt-1">Receive updates about your learning roadmap.</p></div><div className="flex justify-between border-t pt-5"><span className="text-sm">Notifications</span><div className="w-11 h-6 rounded-full bg-indigo-600 p-1"><div className="w-4 h-4 rounded-full bg-white ml-auto"/></div></div><div className="flex justify-between border-t pt-5"><span className="text-sm">Privacy</span><span className="text-xs text-emerald-600 font-semibold">Your data is private</span></div></div></div>
}

function App() {
  const [started,setStarted]=useState(false);
  const [page,setPage]=useState("Dashboard");
  const [mobile,setMobile]=useState(false);
  const [uploading,setUploading]=useState(false);

  const upload = () => {
    setUploading(true);
    setTimeout(()=>setUploading(false),1400);
  };

  if(!started) return <Landing onStart={()=>setStarted(true)}/>;

  const content = {
    Dashboard:<Dashboard setPage={setPage} upload={upload}/>,
    "My Profile":<Profile/>,
    Analysis:<Analysis/>,
    "Learning Roadmap":<Roadmap/>,
    Resources:<Resources/>,
    Settings:<SettingsPage/>
  }[page];

  return <div className="min-h-screen flex bg-[#f8faff]">
    <Sidebar page={page} setPage={setPage}/>
    {mobile && <><div className="fixed inset-0 bg-slate-900/20 z-40" onClick={()=>setMobile(false)}/><Sidebar page={page} setPage={setPage} mobile close={()=>setMobile(false)}/></>}
    <main className="flex-1 min-w-0"><Topbar setMobile={setMobile}/><div className="p-5 md:p-8 max-w-7xl mx-auto">{content}</div></main>
    {uploading && <div className="fixed inset-0 bg-slate-900/20 grid place-items-center z-[60]"><div className="bg-white rounded-2xl p-7 shadow-2xl text-center w-80"><div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-50 text-indigo-600 grid place-items-center"><Upload/></div><h3 className="font-bold mt-4">Resume uploaded</h3><p className="text-xs text-slate-400 mt-1">Analyzing your skills...</p><div className="h-1 bg-indigo-100 rounded-full mt-5 overflow-hidden"><div className="h-full bg-indigo-600 animate-pulse w-3/4"/></div></div></div>}
  </div>
}

export default App;
