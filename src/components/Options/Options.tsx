import React, { RefObject, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PauseCircleFilled,
  PlayCircleFilled,
  ReloadOutlined,
  SyncOutlined
} from '@ant-design/icons'

import styles from './Options.module.scss'
import MenuIcon from '../MenuIcon/MenuIcon'
import { Input, Switch, Slider, Row, Col, ConfigProvider, Segmented, Modal, Button } from 'antd'
import OptionRow from '../OptionRow/OptionRow'
import { defaultOptions, OptionsType, SmartTickerHandle, TickerMode } from '../Content/Content'
import CodeBlock from '../CodeBlock/CodeBlock'

export const Options: React.FC<{
  mode: TickerMode
  isOpen: boolean
  setOptionOpen: (isOpen: boolean) => void
  options: OptionsType
  setOptions: (options: OptionsType) => void
  tickerRef: RefObject<SmartTickerHandle>
}> = ({ mode, isOpen, setOptionOpen, options, setOptions, tickerRef }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Define handlers to control the ticker
  const handlePlay = () => {
    tickerRef.current?.play()
  }

  const handlePause = () => {
    tickerRef.current?.pause()
  }

  const handleReset = (isPaused: boolean = true) => {
    tickerRef.current?.reset(isPaused)
  }

  return (
    <div className={styles.options}>
      <div className={styles.buttons}>
        {isOpen && (
          <ReloadOutlined
            className={styles['options-button']}
            onClick={() => setOptions(defaultOptions)}
          />
        )}

        <MenuIcon isOpen={isOpen} onClick={() => setOptionOpen(!isOpen)} />

        {isOpen && (
          <span
            className={styles['options-button']}
            onClick={() => setIsModalOpen(true)}
          >{`</>`}</span>
        )}
        <ConfigProvider
          theme={{
            token: {
              borderRadiusLG: 30,
              borderRadiusSM: 30
            }
          }}
        >
          <Modal
            open={isModalOpen}
            onClose={() => {
              setIsModalOpen(false)
            }}
            onCancel={() => {
              setIsModalOpen(false)
            }}
            footer={null}
          >
            <CodeBlock options={options[mode]} mode={mode} />
          </Modal>
        </ConfigProvider>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.controls}
            initial={{ height: '0px', paddingTop: '0px', paddingBottom: '0px' }}
            animate={{
              height: 'auto',
              paddingTop: '25px',
              paddingBottom: '25px'
            }}
            exit={{ height: '0px', paddingTop: '0px', paddingBottom: '0px' }}
            style={{ overflowY: 'hidden' }}
          >
            <Row>
              <Col span={24}>
                <OptionRow label={'Controls'} layout='vertical'>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      whiteSpace: 'nowrap',
                      rowGap: '10px',
                      columnGap: '10px',
                      marginBottom: '20px'
                    }}
                  >
                    <PlayCircleFilled
                      style={{ fontSize: '30px', color: '#4d4d4d' }}
                      onClick={() => handlePlay()}
                    />

                    <PauseCircleFilled
                      style={{ fontSize: '30px', color: '#4d4d4d' }}
                      onClick={() => handlePause()}
                    />

                    <span
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '30px',
                        backgroundColor: '#4d4d4d',
                        display: 'inline-flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer'
                      }}
                    >
                      <SyncOutlined
                        style={{ fontSize: '14px', color: 'white' }}
                        onClick={() => handleReset(true)}
                      />
                    </span>
                  </div>
                </OptionRow>
              </Col>
            </Row>

            <Row>
              <Col span={24}>
                <OptionRow
                  label={'Animation type'}
                  layout='vertical'
                  tooltip={
                    <>
                      <strong>CSS: </strong>
                      {`<SmartTicker>`} <br />
                      <strong>JS: </strong>
                      {`<SmartTickerDraggable>`}
                    </>
                  }
                >
                  <Segmented
                    block
                    style={{ textTransform: 'uppercase' }}
                    options={['CSS', 'JS']}
                    value={options[mode].css ? 'CSS' : 'JS'}
                    onChange={(value) => {
                      setOptions({
                        ...options,
                        [mode]: {
                          ...options[mode],
                          css: (value as 'CSS' | 'JS') === 'CSS'
                        }
                      })
                    }}
                  />
                </OptionRow>

                {!options[mode].css && (
                  <OptionRow
                    label={'Draggable'}
                    layout='horizontal'
                    tooltip={
                      options[mode].draggable
                        ? `<SmartTickerDraggable> component`
                        : `<SmartTicker> component`
                    }
                  >
                    <Switch
                      size='small'
                      checked={options[mode].draggable}
                      onChange={(checked) => {
                        setOptions({ ...options, [mode]: { ...options[mode], draggable: checked } })
                      }}
                    />
                  </OptionRow>
                )}

                <OptionRow
                  label={'Smart mode'}
                  layout='horizontal'
                  tooltip={
                    <div>
                      Determines if that's enough space to fit a child in a container and disables
                      automatic animation
                    </div>
                  }
                >
                  <Switch
                    size='small'
                    checked={options[mode].smart}
                    onChange={(checked) => {
                      setOptions({
                        ...options,
                        [mode]: { ...options[mode], smart: checked, autoFill: checked && !checked }
                      })
                    }}
                  />
                </OptionRow>

                <OptionRow
                  label={'Auto fill'}
                  layout='horizontal'
                  tooltip={
                    'Clones the content until fills the container. Disables the "Smart Mode"'
                  }
                >
                  <Switch
                    size='small'
                    checked={options[mode].autoFill}
                    onChange={(checked) => {
                      setOptions({
                        ...options,
                        [mode]: { ...options[mode], autoFill: checked, smart: checked && !checked }
                      })
                    }}
                  />
                </OptionRow>

                <OptionRow label={'Play on hover'} layout='horizontal'>
                  <Switch
                    size='small'
                    checked={options[mode].playOnHover}
                    onChange={(checked) => {
                      setOptions({
                        ...options,
                        [mode]: {
                          ...options[mode],
                          playOnHover: checked,
                          pauseOnHover: checked && !checked,
                          playOnClick: checked && !checked,
                          pauseOnClick: checked && !checked
                        }
                      })
                    }}
                  />
                </OptionRow>

                <OptionRow label={'Pause on hover'} layout='horizontal'>
                  <Switch
                    size='small'
                    checked={options[mode].pauseOnHover}
                    onChange={(checked) => {
                      setOptions({
                        ...options,
                        [mode]: {
                          ...options[mode],
                          pauseOnHover: checked,
                          playOnHover: checked && !checked,
                          pauseOnClick: checked && !checked,
                          playOnClick: checked && !checked
                        }
                      })
                    }}
                  />
                </OptionRow>

                {options[mode].css && (
                  <>
                    <OptionRow label={'Play on click'} layout='horizontal'>
                      <Switch
                        size='small'
                        checked={options[mode].playOnClick}
                        onChange={(checked) => {
                          setOptions({
                            ...options,
                            [mode]: {
                              ...options[mode],
                              playOnClick: checked,
                              pauseOnClick: checked && !checked,
                              playOnHover: checked && !checked,
                              pauseOnHover: checked && !checked
                            }
                          })
                        }}
                      />
                    </OptionRow>
                    <OptionRow label={'Pause on click'} layout='horizontal'>
                      <Switch
                        size='small'
                        checked={options[mode].pauseOnClick}
                        onChange={(checked) => {
                          setOptions({
                            ...options,
                            [mode]: {
                              ...options[mode],
                              pauseOnClick: checked,
                              pauseOnHover: checked && !checked,
                              playOnClick: checked && !checked,
                              playOnHover: checked && !checked
                            }
                          })
                        }}
                      />
                    </OptionRow>
                  </>
                )}

                <OptionRow
                  label={'Infinity loop'}
                  layout='horizontal'
                  tooltip={'Puts the same containers content, one by one while moving'}
                >
                  <Switch
                    size='small'
                    checked={options[mode].infiniteScrollView}
                    onChange={(checked) => {
                      setOptions({
                        ...options,
                        [mode]: { ...options[mode], infiniteScrollView: checked }
                      })
                    }}
                  />
                </OptionRow>

                {mode !== 'html' && (
                  <OptionRow
                    label={'Disable select'}
                    layout='horizontal'
                    tooltip={'Disables the possibility to select a text in the container'}
                  >
                    <Switch
                      size='small'
                      checked={options[mode].disableSelect}
                      onChange={(checked) => {
                        setOptions({
                          ...options,
                          [mode]: { ...options[mode], disableSelect: checked }
                        })
                      }}
                    />
                  </OptionRow>
                )}

                {mode !== 'html' && (
                  <OptionRow label={'RTL'} layout='horizontal' tooltip={'Right To Left text mode'}>
                    <Switch
                      size='small'
                      checked={options[mode].rtl}
                      onChange={(checked) => {
                        setOptions({
                          ...options,
                          [mode]: {
                            ...options[mode],
                            rtl: checked,
                            direction: checked ? 'right' : 'left'
                          }
                        })
                      }}
                    />
                  </OptionRow>
                )}

                {mode !== 'html' && (
                  <OptionRow label={'Ticker text'} layout='vertical'>
                    <Input
                      type='text'
                      value={options[mode].children as string}
                      onChange={(e) =>
                        setOptions({
                          ...options,
                          [mode]: { ...options[mode], children: e.target.value }
                        })
                      }
                    />
                  </OptionRow>
                )}

                {mode === 'one-line' && (
                  <OptionRow label={'Direction'} layout='vertical'>
                    <Segmented
                      block
                      options={['left', 'right']}
                      value={options[mode].direction}
                      onChange={(value) => {
                        setOptions({
                          ...options,
                          [mode]: {
                            ...options[mode],
                            direction: value.toLowerCase() as 'left' | 'right'
                          }
                        })
                      }}
                    />
                  </OptionRow>
                )}

                {mode === 'html' && (
                  <OptionRow label={'Direction'} layout='vertical'>
                    <Segmented
                      block
                      style={{ textTransform: 'uppercase' }}
                      options={['left', 'right', 'top', 'bottom']}
                      value={options[mode].direction}
                      onChange={(value) => {
                        setOptions({
                          ...options,
                          [mode]: {
                            ...options[mode],
                            direction: value.toLowerCase() as 'left' | 'right'
                          }
                        })
                      }}
                    />
                  </OptionRow>
                )}

                {mode === 'multi-line' && (
                  <OptionRow label={'Lines'} layout='vertical'>
                    <Slider
                      marks={{
                        2: '2',
                        3: '3',
                        4: '4',
                        5: '5',
                        6: '6'
                      }}
                      value={options[mode].multiLine}
                      min={2}
                      max={6}
                      onChange={(value) =>
                        setOptions({ ...options, [mode]: { ...options[mode], multiLine: value } })
                      }
                    />
                  </OptionRow>
                )}

                <OptionRow label={'Speed (px/second)'} layout='vertical'>
                  <Slider
                    marks={{
                      0: '0',
                      60: '60',
                      150: '150'
                    }}
                    value={options[mode].speed}
                    min={0}
                    max={150}
                    onChange={(value) =>
                      setOptions({ ...options, [mode]: { ...options[mode], speed: value } })
                    }
                  />
                </OptionRow>

                {!options[mode].css && (
                  <OptionRow label={'Speed back (px/second)'} layout='vertical'>
                    <Slider
                      marks={{
                        0: '0',
                        60: '60',
                        150: '150'
                      }}
                      value={options[mode].speedBack}
                      min={0}
                      max={150}
                      onChange={(value) =>
                        setOptions({ ...options, [mode]: { ...options[mode], speedBack: value } })
                      }
                    />
                  </OptionRow>
                )}

                <OptionRow label={'Delay (ms)'} layout='vertical'>
                  <Slider
                    marks={{
                      0: '0',
                      500: '500ms',
                      1000: '1s',
                      1500: '1.5s',
                      2000: '2s'
                    }}
                    step={500}
                    value={options[mode].delay}
                    min={0}
                    max={2000}
                    onChange={(value) =>
                      setOptions({
                        ...options,
                        [mode]: {
                          ...options[mode],
                          delay: value
                        }
                      })
                    }
                  />
                </OptionRow>

                {!options[mode].css && (
                  <OptionRow label={'Delay back (ms)'} layout='vertical'>
                    <Slider
                      marks={{
                        0: '0',
                        500: '500ms',
                        1000: '1s',
                        1500: '1.5s',
                        2000: '2s'
                      }}
                      step={500}
                      value={options[mode].delayBack}
                      min={0}
                      max={2000}
                      onChange={(value) =>
                        setOptions({ ...options, [mode]: { ...options[mode], delayBack: value } })
                      }
                    />
                  </OptionRow>
                )}

                <OptionRow label={'Iterations'} layout='vertical'>
                  <Slider
                    marks={{
                      0: '∞',
                      1: '1',
                      2: '2',
                      3: '3',
                      4: '4',
                      5: '5'
                    }}
                    step={1}
                    value={options[mode].iterations === 'infinite' ? 0 : options[mode].iterations}
                    min={0}
                    max={5}
                    onChange={(value) =>
                      setOptions({
                        ...options,
                        [mode]: { ...options[mode], iterations: value || 'infinite' }
                      })
                    }
                  />
                </OptionRow>
              </Col>
            </Row>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Options
