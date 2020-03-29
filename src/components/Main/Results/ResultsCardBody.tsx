import React from 'react'
import { Col, Row } from 'reactstrap'
import { AgeBarChart } from './AgeBarChart'
import { AlgorithmResult, UserResult } from '../../../algorithms/types/Result.types'
import { DeterministicLinePlot } from './DeterministicLinePlot'
import { EmpiricalData } from '../../../algorithms/types/Param.types'
import { OutcomeRatesTable } from './OutcomeRatesTable'
import { SeverityTableRow } from '../Scenario/SeverityTable'

export interface ResultsCardBodyProps {
  result?: AlgorithmResult
  userResult?: UserResult
  logScale: boolean
  showHumanized: boolean
  caseCounts?: EmpiricalData
  severity?: SeverityTableRow[]
}

export default function ResultsCardBody({
  result,
  userResult,
  logScale,
  showHumanized,
  caseCounts,
  severity,
}: ResultsCardBodyProps) {
  return (
    <>
      <Row noGutters>
        <Col>
          <DeterministicLinePlot
            data={result}
            userResult={userResult}
            logScale={logScale}
            showHumanized={showHumanized}
            caseCounts={caseCounts}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <AgeBarChart showHumanized={showHumanized} data={result} rates={severity} />
        </Col>
      </Row>
      <Row>
        <Col>
          <OutcomeRatesTable showHumanized={showHumanized} result={result} rates={severity} />
        </Col>
      </Row>
    </>
  )
}
