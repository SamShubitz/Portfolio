import { getURLs, getStats } from "./api"
import { PieChart } from "react-minimal-pie-chart";
import { useQuery } from "@tanstack/react-query";

type GitStatsType = {
    [language: string]: number;
}

type Language = "TypeScript" | "JavaScript" | "CSS" | "C#" | "HTML"

const defaultData = [
    {
        "title": "TypeScript",
        "value": 38.01,
        "color": "#181f3e"
    },
    {
        "title": "CSS",
        "value": 23.95,
        "color": "#626280"
    },
    {
        "title": "HTML",
        "value": 3.46,
        "color": "#e3a427"
    },
    {
        "title": "C#",
        "value": 16.66,
        "color": "#7885bf"
    },
    {
        "title": "JavaScript",
        "value": 17.89,
        "color": "#363e63"
    }
]

const GitStats = () => {
    const urlQuery = useQuery({
        queryKey: ["urls"],
        queryFn: getURLs,
        enabled: defaultData === undefined, // query is disabled
        staleTime: Infinity
    })

    const gitStatsQuery = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const urls = urlQuery.data.map((repo: any) => {
            return repo.languages_url
        });

            const responses = urls.map((url: string) => {
            return getStats(url)
        })
            return Promise.all(responses)
        },
        enabled: urlQuery.isSuccess,
        staleTime: Infinity
    })

    const calculateDisplayData = () => {
        const gitStats: GitStatsType[] | undefined = gitStatsQuery.data
        const totals: GitStatsType = {};

        gitStats?.forEach((repoStats) => {
            Object.entries(repoStats).forEach(([lang, stat]) => {
                if (lang in totals) {
                    totals[lang] += stat;
                } else {
                    totals[lang] = stat;
                }
            })
    }); 
        const percentTotals: GitStatsType = {}
        let sum = 0;
        for (let lang in totals) {
            sum += totals[lang]
        }
        for (let lang in totals) {
            percentTotals[lang] = (totals[lang] / sum) * 100;
        }

        const displayData = [];
        const pieColors = {
            TypeScript: "#181c2e",
            JavaScript: "#363e63",
            "C#": "#7885bf",
            CSS: "#626280",
            HTML: "#e3a427",
        }
        for (let lang in totals) {
            const entry = {title: lang, value: percentTotals[lang], color: pieColors[lang as Language]}
            displayData.push(entry)
        }
        return displayData
    }
    
    const pieData = calculateDisplayData();

    const displayData = urlQuery.isSuccess ? pieData : defaultData;

    const pieStyle = {
        fontFamily: "Avenir", width: '300px', height: '300px',
        fontWeight: "bold", paddingInline: "2rem",
        paddingBlock: "1rem", paddingBottom: "3rem", padding: "0"}

    return (
        <div className="langs-used-section">
            <h1>Languages</h1>
            <PieChart
            animate={true}
            animationDuration={600}
            style={pieStyle}
            lineWidth={25}
            label={({ x, y, dx, dy, dataEntry }) => (
                <text
                    x={x}
                    y={y}
                    dx={dx}
                    dy={dy}
                    dominantBaseline="central"
                    textAnchor="middle"
                    style={{
                        fill: 'white', pointerEvents: 'none', fontSize: '4px'
                    }}>
                    <tspan x={x-2} y={y+1} dx={dx} dy={dy}>{dataEntry.title}</tspan>
                    <tspan x={x-2} y={y-5} dx={dx} dy={dy}>{`${Math.round(dataEntry.value)}%`}</tspan>
                </text>
            )}
            data={displayData}
            />
        </div>
    )

}

export default GitStats;