import React from 'react';
import Header from '../header/Header';
import './Setting.css'
import translatorMakarem from '../../images/translatorMakarem.png'
import HosseinAnsarian from '../../images/HosseinAnsarian.png'
import reciterParhizgar from '../../images/reciterParhizgar.png'
import reciterAbdulbasit from '../../images/reciterAbdulbasit.jpg'
import reciterAlghamadi from '../../images/reciterAlghamadi.jpg'
import reciterMotaz from '../../images/reciterMotaz.png'
import reciterMinshawy from '../../images/reciterMinshawy.png'
import reciterHusary from '../../images/reciterHusary.png'

const Setting : React.FC= () => {
    return (
        <div className='quranContainer'>
            <div>
                <Header headerName={`تنظیمات قرآن`} isSetting={false}/>
            </div>
            <div className='quranMain quranSettingtop'>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    نحوه نمایش 
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='fullAyeh'
                            value={''} />
                            <p className='textInput'>
                            نمایش آیه و ترجمه با هم 
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='fullAyeh'
                            value={''} />
                            <p className='textInput'>
                            فقط نمایش آیه 
                            </p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    انتخاب ترجمه  
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='translator'
                            value={''} />
                            <img src={translatorMakarem} alt='translator-makarem' className='settingImage' />
                            <p className='textInput'>
                            مکارم شیرازی
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='translator'
                            value={''} />
                            <img src={HosseinAnsarian} alt='HosseinAnsarian' className='settingImage' />
                            <p className='textInput'>حسین انصاریان</p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    تکرار آیات 
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='soundRepeat'
                            value={''} />
                            <p className='textInput'>
                            غیر فعال 
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='soundRepeat'
                            value={''} />
                            <p className='textInput'>
                            تکرار آیه 
                            </p>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='soundRepeat'
                            value={''} />
                            <p className='textInput'>
                            تکرار صفحه 
                            </p>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    انتخاب قاری 
                    </h2>
                    <div className='quranSettingCard'>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterParhizgar} alt='reciterParhizgar' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد پرهیزگار
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterAlghamadi} alt='reciterAlghamadi' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد سعد الغامدی
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterHusary} alt='reciterHusary' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد خلیل الحصری
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterMinshawy} alt='reciterMinshawy' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد منشاوی
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterMotaz} alt='reciterMotaz' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد معتز آقایی
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                        <label className='quranSettingRadioBox'>
                            <input
                            type='radio'
                            name='reciter'
                            value={''} />
                            <img src={reciterAbdulbasit} alt='reciterAbdulbasit' className='settingImage'/>
                            <div className='settingFlex'>
                                <p className='textInput'>
                                استاد عبد الباسط
                                </p>
                            </div>
                            <button className='playPreviewButton'>
                                <i className='icon playPreviewButtonIcon'>
                                <svg viewBox="0 0 25 22" className="svg">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.05 14.55a4.98 4.98 0 000-7.05m2.8 9.85a9.054 9.054 0 000-12.75M15.5 21L8 15.5H3.5a2 2 0 01-2-2v-5a2 2 0 012-2H8L15.5 1v20z">
                                    </path>
                                </svg>
                                </i>
                            </button>
                        </label>
                    </div>
                </div>
                <div className='quranSettingBox'>
                    <h2 className='quranSettingTitle'>
                    تنظیمات مربوط به متن 
                    </h2>
                    <div className='quranSettingCard'>
                        <h3 className='quranSettingTitleText'>
                        انتخاب فونت  
                        </h3>
                        <div className='settingSelect'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                واضح 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                واضح 2 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                محمد(ص) 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='font'
                                value={''} />
                                <p className='textInput'>
                                عثمان‌طه 
                                </p>
                            </label>
                        </div>
                        <h3 className='quranSettingTitleText'>
                        ضخامت و بزرگی متن آیه 
                        </h3>
                        <div className='settingCenter'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehThickness'
                                value={''} />
                                <p className='textInput'>
                                    نازک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehThickness'
                                value={''} />
                                <p className='textInput'>
                                    معمولی 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehThickness'
                                value={''} />
                                <p className='textInput'>
                                    ضخیم 
                                </p>
                            </label>
                        </div>
                        <div className='settingSelect'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    متوسط 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    بزرگ 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='ayehBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌بزرگ 
                                </p>
                            </label>
                        </div>
                        <h3 className='quranSettingTitleText'>
                            ضخامت و بزرگی متن ترجمه 
                        </h3>
                        <div className='settingCenter'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateThickness'
                                value={''} />
                                <p className='textInput'>
                                    نازک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateThickness'
                                value={''} />
                                <p className='textInput'>
                                    ضخیم 
                                </p>
                            </label>
                        </div>
                        <div className='settingSelect'>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    کوچک 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    متوسط 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    بزرگ 
                                </p>
                            </label>
                            <label className='quranSettingRadioBox'>
                                <input
                                type='radio'
                                name='translateBigness'
                                value={''} />
                                <p className='textInput'>
                                    خیلی‌بزرگ 
                                </p>
                            </label>
                        </div>
                        <div className='settingMainSample'>
                            <div className='settingSample'>
                                <div className='settingMainPreview'>
                                    <div className='settingPreview '>
                                        ذٰلِكَ الۡكِتاٰبُ لاٰ رَیۡبَۛ فٖیهِۛ هُدًى لِلۡمُتَّقٖینَ
                                    </div>
                                    <div className='settingPreview '>

                                    </div>
                                </div>
                                <div className='settingMainAyehNumber'>
                                    <i className='settingAyehNumber'>
                                        <svg fill="none" viewBox="0 0 152 152" className="settingSvg">
                                            <path fill="#fff" d="M49.68 12.96c6.68-3.44 13.21-7.17 20-10.36 2-.927 4-1.793 6-2.6 2 .807 4 1.673 6 2.6 6.8 3.2 13.33 6.93 20 10.36 7.15 2.29 14.41 4.27 21.47 6.82 2.047.74 4.063 1.533 6.05 2.38.847 2 1.64 4.017 2.38 6.05 2.55 7.07 4.53 14.32 6.82 21.48 3.44 6.68 7.17 13.21 10.36 20 .927 2 1.793 4 2.6 6-.807 2-1.673 4-2.6 6-3.2 6.8-6.93 13.33-10.36 20-2.29 7.15-4.27 14.41-6.82 21.48a115.945 115.945 0 01-2.38 6.05c-2 .847-4.017 1.64-6.05 2.38-7.07 2.55-14.32 4.53-21.47 6.82-6.68 3.44-13.21 7.17-20 10.36-2 .927-4 1.793-6 2.6-2-.807-4-1.673-6-2.6-6.8-3.2-13.33-6.93-20-10.36-7.15-2.29-14.41-4.27-21.47-6.82a115.945 115.945 0 01-6.05-2.38c-.847-2-1.64-4.017-2.38-6.05-2.55-7.07-4.53-14.32-6.82-21.48-3.44-6.68-7.17-13.21-10.36-20-.927-2-1.793-4-2.6-6 .807-2 1.673-4 2.6-6 3.2-6.8 6.93-13.33 10.36-20 2.29-7.15 4.27-14.41 6.82-21.48.74-2.047 1.533-4.063 2.38-6.05 2-.847 4.017-1.64 6.05-2.38 7.06-2.55 14.33-4.52 21.47-6.82zm26-9.17a116.682 116.682 0 00-7.29 3.31c-2.72 1.34-5.41 2.77-8.09 4.19l5.5 2.37c3.25-1.63 6.54-3.18 9.88-4.57 3.34 1.39 6.63 2.93 9.88 4.57l5.5-2.37c-2.68-1.43-5.37-2.85-8.09-4.19a136.75 136.75 0 00-7.32-3.31h.03zm50.82 21a110.654 110.654 0 00-7.5-2.81c-2.87-1-5.78-1.87-8.68-2.75.73 1.86 1.47 3.72 2.21 5.56 3.46 1.14 6.88 2.38 10.22 3.76 1.38 3.34 2.61 6.76 3.76 10.22l5.56 2.21c-.89-2.9-1.78-5.81-2.75-8.68a143.73 143.73 0 00-2.86-7.46l.04-.05zm21.04 50.87a116.662 116.662 0 00-3.31-7.29c-1.34-2.72-2.77-5.41-4.19-8.09-.8 1.83-1.59 3.67-2.37 5.5 1.63 3.25 3.18 6.54 4.57 9.88-1.39 3.34-2.93 6.63-4.57 9.88.78 1.83 1.58 3.67 2.37 5.5 1.43-2.68 2.85-5.37 4.19-8.09a145.636 145.636 0 003.31-7.29zm-21 50.82a110.494 110.494 0 002.81-7.5c1-2.87 1.87-5.78 2.75-8.68l-5.56 2.21c-1.14 3.46-2.38 6.88-3.76 10.22-3.34 1.38-6.76 2.61-10.22 3.76-.74 1.85-1.48 3.71-2.21 5.56 2.9-.89 5.81-1.78 8.68-2.75a133.45 133.45 0 007.43-2.82h.08zm-50.82 21a116.688 116.688 0 007.29-3.31c2.72-1.34 5.41-2.77 8.09-4.19l-5.56-2.32c-3.25 1.63-6.54 3.18-9.88 4.57-3.34-1.39-6.63-2.93-9.88-4.57l-5.5 2.37c2.68 1.43 5.37 2.85 8.09 4.19 2.4 1.187 4.827 2.29 7.28 3.31l.07-.05zm-50.82-21a110.374 110.374 0 007.5 2.81c2.87 1 5.78 1.87 8.68 2.75-.73-1.86-1.47-3.72-2.21-5.56-3.46-1.14-6.88-2.38-10.22-3.76-1.38-3.34-2.61-6.76-3.76-10.22l-5.56-2.21c.89 2.9 1.78 5.81 2.75 8.68a93.358 93.358 0 002.75 7.51h.07zm-21-50.82a116.694 116.694 0 003.31 7.29c1.34 2.72 2.77 5.41 4.19 8.09.79-1.83 1.59-3.67 2.37-5.5-1.64-3.25-3.18-6.54-4.57-9.88 1.39-3.34 2.93-6.63 4.57-9.88-.78-1.83-1.58-3.67-2.37-5.5-1.43 2.68-2.85 5.37-4.19 8.09a84.845 84.845 0 00-3.43 7.29h.12zm21-50.82a110.494 110.494 0 00-2.81 7.5c-1 2.87-1.87 5.78-2.75 8.68l5.56-2.21c1.14-3.46 2.38-6.88 3.76-10.22 3.34-1.38 6.76-2.61 10.22-3.76.74-1.85 1.48-3.71 2.21-5.56-2.9.89-5.81 1.78-8.68 2.75-2.58.867-5.107 1.807-7.58 2.82h.07zm50.75-13.18c-2.38 1-4.74 2.11-7.08 3.26l6.55 2.84.53-.22.53.22 6.55-2.84c-2.34-1.2-4.7-2.26-7.08-3.26zm45.29 18.76c-2.4-1-4.84-1.86-7.31-2.7.88 2.207 1.757 4.42 2.63 6.64l.53.21.21.53 6.64 2.56c-.85-2.45-1.74-4.89-2.71-7.29l.01.05zm18.75 45.24c-1-2.38-2.11-4.74-3.26-7.08-.94 2.187-1.887 4.37-2.84 6.55l.22.53-.22.53c.953 2.18 1.9 4.363 2.84 6.55 1.11-2.34 2.25-4.7 3.26-7.08zm-18.76 45.29c1-2.4 1.86-4.84 2.7-7.31l-6.64 2.63-.21.53-.53.21a914.367 914.367 0 01-2.63 6.64c2.47-.84 4.92-1.73 7.31-2.7zm-45.28 18.71c2.38-1 4.74-2.11 7.08-3.26l-6.56-2.74-.53.22-.53-.22-6.57 2.79c2.37 1.15 4.72 2.21 7.11 3.21zM30.36 120.9c2.4 1 4.84 1.86 7.31 2.7-.88-2.207-1.757-4.42-2.63-6.64l-.53-.21-.21-.53-6.65-2.56c.89 2.45 1.74 4.89 2.71 7.29v-.05zM11.6 75.66c1 2.38 2.11 4.74 3.26 7.08.94-2.187 1.887-4.37 2.84-6.55l-.22-.53.22-.53c-.953-2.18-1.9-4.363-2.84-6.55-1.15 2.34-2.25 4.7-3.26 7.08zm18.76-45.29c-1 2.4-1.86 4.84-2.7 7.31l6.64-2.63.21-.53.53-.21a914.367 914.367 0 012.63-6.64c-2.47.84-4.91 1.73-7.31 2.7zm45.29-8.61c-6.39-2.87-12.86-5.57-19.28-8.38-1.77.95-3.55 1.89-5.35 2.81-1.92.62-3.84 1.21-5.77 1.8-2.56 6.53-5.22 13-7.71 19.56-6.54 2.49-13 5.16-19.56 7.71-.58 1.92-1.18 3.85-1.8 5.77-.92 1.79-1.86 3.57-2.81 5.35 2.81 6.42 5.51 12.9 8.38 19.28-2.87 6.39-5.57 12.86-8.38 19.28.95 1.77 1.89 3.55 2.81 5.35.62 1.92 1.21 3.84 1.8 5.77 6.53 2.56 13 5.22 19.56 7.71 2.49 6.54 5.16 13 7.71 19.56 1.92.58 3.85 1.18 5.77 1.8 1.79.92 3.57 1.86 5.35 2.81 6.42-2.81 12.89-5.51 19.28-8.38 6.39 2.87 12.86 5.57 19.28 8.38 1.77-.95 3.55-1.89 5.35-2.81 1.92-.62 3.84-1.21 5.77-1.8 2.56-6.53 5.22-13 7.71-19.56 6.54-2.49 13-5.16 19.56-7.71.58-1.92 1.18-3.85 1.8-5.77.92-1.79 1.86-3.57 2.81-5.35-2.81-6.42-5.51-12.9-8.38-19.28 2.87-6.39 5.57-12.86 8.38-19.28-.95-1.77-1.89-3.55-2.81-5.35-.62-1.92-1.21-3.84-1.8-5.77-6.53-2.56-13-5.22-19.56-7.71-2.49-6.54-5.16-13-7.71-19.56-1.92-.58-3.85-1.18-5.77-1.8-1.79-.92-3.57-1.86-5.35-2.81-6.39 2.81-12.89 5.52-19.28 8.39v-.01zM53.1 21.2c7.59 3.32 15.16 6.58 22.55 10.17 7.39-3.59 15-6.85 22.55-10.17 3 7.71 6.07 15.38 8.75 23.14 7.77 2.69 15.43 5.74 23.14 8.75-3.31 7.57-6.55 15.18-10.17 22.57 3.59 7.39 6.85 15 10.17 22.55-7.71 3-15.38 6.07-23.14 8.75-2.69 7.77-5.74 15.43-8.75 23.14-7.59-3.32-15.16-6.58-22.55-10.17-7.39 3.59-15 6.85-22.55 10.17-3-7.71-6.07-15.38-8.75-23.14-7.77-2.69-15.43-5.74-23.14-8.75 3.33-7.55 6.57-15.16 10.16-22.55-3.59-7.39-6.85-15-10.17-22.55 7.71-3 15.38-6.07 23.14-8.75 2.68-7.78 5.73-15.44 8.75-23.15l.01-.01z">
                                            </path>
                                            <path fill="#F6E0AE" d="M75.65 31.38c-7.39-3.59-15-6.85-22.55-10.17-3 7.71-6.07 15.38-8.75 23.14-7.77 2.69-15.43 5.74-23.14 8.75 3.33 7.56 6.57 15.17 10.16 22.56-3.59 7.39-6.85 15-10.17 22.55 7.71 3 15.38 6.07 23.14 8.75 2.69 7.77 5.74 15.43 8.75 23.14 7.59-3.32 15.16-6.58 22.55-10.17 7.39 3.59 15 6.85 22.55 10.17 3-7.71 6.07-15.38 8.75-23.14 7.77-2.69 15.43-5.74 23.14-8.75-3.3-7.55-6.54-15.16-10.16-22.55 3.59-7.39 6.85-15 10.17-22.55-7.71-3-15.38-6.07-23.14-8.75-2.69-7.77-5.74-15.43-8.75-23.14-7.59 3.31-15.16 6.57-22.55 10.16zM51.02 16.19c1.79-.92 3.57-1.86 5.35-2.81 6.42 2.81 12.89 5.51 19.28 8.38 6.39-2.87 12.86-5.57 19.28-8.38 1.77.95 3.55 1.89 5.35 2.81 1.92.62 3.84 1.21 5.77 1.8 2.56 6.53 5.22 13 7.71 19.56 6.54 2.49 13 5.16 19.56 7.71.58 1.92 1.18 3.85 1.8 5.77.92 1.79 1.86 3.57 2.81 5.35-2.81 6.42-5.51 12.9-8.38 19.28 2.87 6.39 5.57 12.86 8.38 19.28-.95 1.77-1.89 3.55-2.81 5.35-.62 1.92-1.21 3.84-1.8 5.77-6.53 2.56-13 5.22-19.56 7.71-2.49 6.54-5.16 13-7.71 19.56-1.92.58-3.85 1.18-5.77 1.8-1.79.92-3.57 1.86-5.35 2.81-6.42-2.81-12.9-5.51-19.28-8.38-6.39 2.87-12.86 5.57-19.28 8.38-1.77-.95-3.55-1.89-5.35-2.81-1.92-.62-3.84-1.21-5.77-1.8-2.56-6.53-5.22-13-7.71-19.56-6.54-2.49-13-5.16-19.56-7.71-.58-1.92-1.18-3.85-1.8-5.77-.92-1.79-1.86-3.57-2.81-5.35 2.81-6.42 5.51-12.9 8.38-19.28-2.87-6.39-5.57-12.86-8.38-19.28.95-1.77 1.89-3.55 2.81-5.35.62-1.92 1.21-3.84 1.8-5.77 6.53-2.56 13-5.22 19.56-7.71 2.49-6.54 5.16-13 7.71-19.56 1.92-.58 3.85-1.18 5.76-1.8h.01z">
                                            </path>
                                            <path fill="#00B3A0" d="M75.65 9.1c-3.34 1.39-6.63 2.93-9.88 4.57l-5.5-2.37c2.68-1.43 5.37-2.85 8.09-4.19a120.29 120.29 0 017.29-3.31 116.656 116.656 0 017.29 3.31c2.72 1.34 5.41 2.77 8.09 4.19l-5.49 2.36c-3.27-1.63-6.56-3.17-9.89-4.56zm47.06 19.5c-3.34-1.38-6.76-2.61-10.22-3.76-.74-1.85-1.48-3.71-2.21-5.56 2.9.89 5.81 1.78 8.68 2.75 2.547.86 5.047 1.797 7.5 2.81a110.334 110.334 0 012.81 7.5c1 2.87 1.87 5.78 2.75 8.68l-5.56-2.21c-1.14-3.45-2.37-6.87-3.75-10.21zm19.49 47.06c-1.39-3.34-2.93-6.63-4.57-9.88.78-1.83 1.58-3.67 2.37-5.5 1.43 2.68 2.85 5.37 4.19 8.09a120.268 120.268 0 013.31 7.29 116.688 116.688 0 01-3.31 7.29c-1.34 2.72-2.77 5.41-4.19 8.09-.8-1.83-1.59-3.67-2.37-5.5 1.64-3.25 3.19-6.54 4.57-9.88zm-19.49 47.06c1.38-3.34 2.61-6.76 3.76-10.22l5.56-2.21c-.89 2.9-1.78 5.81-2.75 8.68a121.346 121.346 0 01-2.81 7.5 110.494 110.494 0 01-7.5 2.81c-2.87 1-5.78 1.87-8.68 2.75.73-1.86 1.47-3.72 2.21-5.56 3.45-1.13 6.87-2.37 10.21-3.75zm-47.06 19.5c3.34-1.39 6.63-2.93 9.88-4.57l5.5 2.37c-2.68 1.43-5.37 2.85-8.09 4.19a120.268 120.268 0 01-7.29 3.31 116.688 116.688 0 01-7.29-3.31c-2.72-1.34-5.41-2.77-8.09-4.19l5.5-2.37c3.25 1.64 6.54 3.18 9.88 4.57zm-47.11-19.5c3.34 1.38 6.76 2.61 10.22 3.76.74 1.85 1.48 3.71 2.21 5.56-2.9-.89-5.81-1.78-8.68-2.75a121.49 121.49 0 01-7.5-2.81 110.654 110.654 0 01-2.81-7.5c-1-2.87-1.87-5.78-2.75-8.68l5.56 2.21c1.18 3.45 2.41 6.87 3.75 10.21zM9.09 75.66c1.39 3.34 2.93 6.63 4.57 9.88-.78 1.83-1.58 3.67-2.37 5.5-1.43-2.68-2.85-5.37-4.19-8.09a120.318 120.318 0 01-3.31-7.29 116.656 116.656 0 013.31-7.29c1.34-2.72 2.77-5.41 4.19-8.09.79 1.83 1.59 3.67 2.37 5.5-1.64 3.25-3.18 6.54-4.57 9.88zM28.54 28.6c-1.38 3.34-2.61 6.76-3.76 10.22l-5.56 2.21c.89-2.9 1.78-5.81 2.75-8.68.86-2.547 1.797-5.047 2.81-7.5a110.534 110.534 0 017.5-2.81c2.87-1 5.78-1.87 8.68-2.75-.73 1.86-1.47 3.72-2.21 5.56-3.41 1.13-6.83 2.37-10.21 3.75z">
                                            </path>
                                            <path fill="#FFB312" d="M75.65 17.48l-.53.22-6.58-2.83c2.34-1.15 4.7-2.24 7.08-3.26 2.38 1 4.74 2.11 7.08 3.26l-6.53 2.79-.52-.18zm41.13 17.04l-.53-.21a914.367 914.367 0 00-2.63-6.64c2.47.84 4.91 1.74 7.31 2.7 1 2.4 1.86 4.84 2.7 7.31l-6.64-2.63-.21-.53zm17.04 41.14l-.22-.53c.953-2.18 1.9-4.363 2.84-6.55 1.15 2.34 2.24 4.7 3.26 7.08-1 2.38-2.11 4.74-3.26 7.08-.94-2.187-1.887-4.37-2.84-6.55l.22-.53zm-17.04 41.14l.21-.53 6.65-2.61c-.84 2.47-1.74 4.91-2.7 7.31-2.4 1-4.84 1.86-7.31 2.7.88-2.207 1.757-4.42 2.63-6.64l.52-.23zm-41.13 17.04l.53-.22 6.55 2.84c-2.34 1.15-4.7 2.24-7.08 3.26-2.38-1-4.74-2.11-7.08-3.26l6.55-2.84.53.22zM34.54 116.8l.53.21a914.38 914.38 0 002.63 6.64c-2.47-.84-4.91-1.74-7.31-2.7-1-2.4-1.86-4.84-2.7-7.31l6.64 2.63.21.53zM17.47 75.66l.22.53c-.953 2.18-1.9 4.363-2.84 6.55-1.15-2.34-2.24-4.7-3.26-7.08 1-2.38 2.11-4.74 3.26-7.08a1138.7 1138.7 0 002.84 6.55l-.22.53zm17.07-41.14l-.21.53-6.68 2.61c.84-2.47 1.74-4.91 2.7-7.31 2.4-1 4.84-1.86 7.31-2.7-.88 2.207-1.757 4.42-2.63 6.64l-.49.23z">
                                            </path>
                                        </svg>
                                    </i>
                                    <span className='settingAyehNum'>2</span>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Setting;