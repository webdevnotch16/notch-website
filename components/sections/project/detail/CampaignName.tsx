import parse from 'html-react-parser';

const CampaignName = ({ campaignName }: {campaignName: string}) => {
  if(!campaignName) return;
  return (
    <>{parse(campaignName)}</>
  )
}

export default CampaignName