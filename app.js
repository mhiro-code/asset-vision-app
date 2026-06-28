const DB=window.ASSET_LIFELOG_DB;let selectedChannel="ideco_gold";let selectedRange="1Y";
const {yen,pct,dstr,byDate}=window.AssetVisionCommon;
const {loadSavedRows,persistSavedRows,mergeSavedRows}=window.AssetVisionStorage;
const {openModal,closeModal,closeModalIfOpen}=window.AssetVisionModal;
const {openMarketMemo:openMarketMemoDetail,openChannelMemo:openChannelMemoDetail,openChannelDetail:openChannelDetailDetail}=window.AssetVisionDetail;
const channels=()=>DB.channels.filter(c=>c.active).sort((a,b)=>(a.displayOrder??0)-(b.displayOrder??0));const channel=id=>DB.channels.find(c=>c.id===id);
const rows=id=>DB.accountDaily.filter(r=>r.channelId===id&&r.asset!=null).sort(byDate);const purpose=id=>DB.purposeMaster.find(p=>p.id===id);const latest=id=>rows(id).at(-1);const prev=id=>rows(id).at(-2);function allPurposeLabels(c){return(c.purposes||[]).map(id=>{const p=purpose(id);return p?`${p.icon} ${p.label}`:id}).join(" / ")}
function lastMemoForChannel(id){return DB.channelMemos.filter(m=>m.channelId===id).sort(byDate).at(-1)}function latestMarketMemo(){return DB.marketMemos.slice().sort(byDate).at(-1)}
function renderSummary(){window.AssetVisionDashboard.renderSummary({channels,latest,prev,rows})}
function renderChannelTable(){window.AssetVisionDashboard.renderChannelTable({channels,latest,prev,purpose,lastMemoForChannel})}
function setupControls(){document.getElementById("channelSelect").innerHTML=channels().map(c=>`<option value="${c.id}">${c.name}</option>`).join("");document.getElementById("channelSelect").value=selectedChannel;document.getElementById("channelSelect").onchange=e=>{selectedChannel=e.target.value;renderChart();renderDataTable()};document.querySelectorAll("[data-range]").forEach(btn=>{btn.classList.toggle("active",btn.dataset.range===selectedRange);btn.onclick=()=>{selectedRange=btn.dataset.range;setupControls();renderChart();renderDataTable()}})}
function renderChart(){window.AssetVisionChart.renderChart({selectedChannel,selectedRange,channel,rows})}
function renderDataTable(){window.AssetVisionDashboard.renderDataTable({selectedChannel,selectedRange,rows})}
function openMarketMemo(){openMarketMemoDetail({memo:latestMarketMemo()})}
function openChannelMemo(id){openChannelMemoDetail({channel:channel(id),memo:lastMemoForChannel(id)})}
function openChannelDetail(id){openChannelDetailDetail({channel:channel(id),rows:rows(id),allPurposeLabels})}
function init(){mergeSavedRows();document.getElementById("appVer").textContent=`${DB.app.name} v${DB.app.version}`;renderSummary();renderChannelTable();setupControls();renderChart();renderDataTable();window.AssetVisionImport.setup({rows,openModal,closeModal,closeModalIfOpen,refreshAfterSave:channelId=>{renderSummary();renderChannelTable();selectedChannel=channelId;setupControls();renderChart();renderDataTable()}});document.getElementById("modalBackdrop").addEventListener("click",e=>{if(e.target.id==="modalBackdrop")closeModal()})}
init();
