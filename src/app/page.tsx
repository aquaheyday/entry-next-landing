'use client'

import { useInView } from 'react-intersection-observer'
import { motion, Variants } from 'framer-motion'

const sections = [
  {
    title: '1단계: 제품 데이터 수집',
    text: '웹사이트, 앱, POS 등 다양한 채널에서 사용자 행동과 상품 정보를 실시간으로 수집합니다.',
  },
  {
    title: '2단계: 데이터 전처리 및 분석',
    text: '수집된 원시 데이터를 정제(cleaning)하고, 특징(feature) 추출을 통해 분석에 적합한 형태로 변환합니다.',
  },
  {
    title: '3단계: AI 모델 학습',
    text: 'LightFM, 딥러닝 등의 알고리즘으로 사용자·상품 임베딩을 학습하여 개인화 추천 모델을 구축합니다.',
  },
  {
    title: '4단계: 추천 생성 및 검증',
    text: '실시간 또는 배치 방식으로 추천 리스트를 생성하고, A/B 테스트로 추천 품질을 검증합니다.',
  },
  {
    title: '5단계: 추천 결과 노출',
    text: '웹/앱 UI에 개인별 추천 상품을 노출하여, 클릭·구매 전환을 최적화합니다.',
  },
]

const sectionVariants: Variants = {
  offscreen: { opacity: 0, y: 60 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export default function HomePage() {
  return (
      <main
          className="
        snap-y snap-mandatory h-screen overflow-y-scroll
        scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
      "
      >
        {sections.map(({ title, text }, i) => (
            <Section key={i} title={title} text={text} />
        ))}
      </main>
  )
}

function Section({
                   title,
                   text,
                 }: {
  title: string
  text: string
}) {
  const [ref, inView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  })

  return (
      <section
          ref={ref}
          className="snap-start flex items-center justify-center h-screen bg-gray-50 dark:bg-gray-900"
      >
        <motion.div
            className="max-w-2xl p-8 text-center space-y-4"
            initial="offscreen"
            animate={inView ? 'onscreen' : 'offscreen'}
            variants={sectionVariants}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            {text}
          </p>
        </motion.div>
      </section>
  )
}
