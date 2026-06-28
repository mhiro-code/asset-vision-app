const DB=window.ASSET_LIFELOG_DB;let selectedChannel="ideco_gold";let selectedRange="1Y";
const {byDate}=window.AssetVisionCommon;
const {mergeSavedRows}=window.AssetVisionStorage;
const {openModal,closeModal,closeModalIfOpen}=window.AssetVisionModal;
const {openMarketMemo:openMarketMemoDetail,openChannelMemo:openChannelMemoDetail,openChannelDetail:openChannelDetailDetail}=window.AssetVisionDetail;
const channels=()=>DB.channels.filter(c=>c.active).sort((a,b)=>(a.displayOrder??0)-(b.displayOrder??0));const channel=id=>DB.channels.find(c=>c.id===id);
const rows=id=>DB.accountDaily.filter(r=>r.channelId===id&&r.asset!=null).sort(byDate);const purpose=id=>DB.purposeMaster.find(p=>p.id===id);const latest=id=>rows(id).at(-1);const prev=id=>rows(id).at(-2);function allPurposeLabels(c){return(c.purposes||[]).map(id=>{const p=purpose(id);return p?`${p.icon} ${p.label}`:id}).join(" / ")}
function lastMemoForChannel(id){return DB.channelMemos.filter(m=>m.channelId===id).sort(byDate).at(-1)}function latestMarketMemo(){return DB.marketMemos.slice().sort(byDate).at(-1)}
function renderSummary(){window.AssetVisionDashboard.renderSummary({channels,latest,prev,rows})}
function renderChannelTable(){window.AssetVisionDashboard.renderChannelTable({channels,latest,prev,purpose,lastMemoForChannel})}
function renderChart(){window.AssetVisionChart.renderChart({selectedChannel,selectedRange,channel,rows})}
function renderDataTable(){window.AssetVisionDashboard.renderDataTable({selectedChannel,selectedRange,rows})}
function openMarketMemo(){openMarketMemoDetail({memo:latestMarketMemo()})}
function openChannelMemo(id){openChannelMemoDetail({channel:channel(id),memo:lastMemoForChannel(id)})}
function openChannelDetail(id){openChannelDetailDetail({channel:channel(id),rows:rows(id),allPurposeLabels})}
function setupControls(){window.AssetVisionAppInit.setupControls({channels,getSelectedChannel:()=>selectedChannel,setSelectedChannel:value=>{selectedChannel=value},getSelectedRange:()=>selectedRange,setSelectedRange:value=>{selectedRange=value},renderChart,renderDataTable})}
function init(){window.AssetVisionAppInit.init({DB,mergeSavedRows,setupControls,renderSummary,renderChannelTable,renderChart,renderDataTable,rows,openModal,closeModal,closeModalIfOpen,setSelectedChannel:value=>{selectedChannel=value}})}
init();
