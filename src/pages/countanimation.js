import AnimatedNumber from 'react-animated-number';
import { motion} from 'framer-motion';
import { ReportCanvas } from '../styled/report.styled';
export default function Counter()
{
    const bigValue=1000
    return(
            <ReportCanvas as={motion.div}
            initial={{x:'-100vh'}}
            animate={{scale:2,color:'red',x:400,y:200}}>
        <AnimatedNumber component="text"
        value={bigValue}
        style={{
            transition: '0.8s ease-out',
            fontSize: 48,
            transitionProperty:
                'background-color, color, opacity'
        }}
        formatValue={n=>n.toFixed(0)}
        duration={2000}
        />
        </ReportCanvas>
    )
}