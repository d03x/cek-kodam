import { useState } from 'react';

import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Spin,
} from 'antd';

import {
  cekRandom,
  checkKhodam,
} from '../khodams';

export default function CardKhodam() {

    const [loading, setLoading] = useState<boolean>(false)

    function onFinishKodam(data: any) {
        setLoading(true)
        const Kodam = new Promise(function (resolved) {
            setTimeout(() => {
                resolved(true);
            }, 2000)
        });

        Kodam.then(function () {
            const index = cekRandom();

            const kodamFromLocalStorage = localStorage.getItem(data.nama);

            if (!kodamFromLocalStorage) {
                localStorage.setItem(data.nama, index.toString());
            }

            const kodam = checkKhodam(index);

            if (kodam) {
                Modal.success({
                    title: `Kodam anda ${kodam.nama}`,
                    content: <>
                        <div>

                            <b>Deskripsi: </b> {kodam.deskripsi}
                        </div>
                        <div>

                            <b>Asal: </b> {kodam.asal}
                        </div>
                        <div>

                            <b>Kesukaan: </b> {kodam.kesukaan}
                        </div>
                    </>,
                })
            } else {
                Modal.warning({
                    title: "Kosong",
                    content: "Kodam anda kosong! Bagus dong"
                })
            }

            setLoading(false);
        })

    }

    return (
        <>
            <Spin fullscreen spinning={loading} />
            <div className="w-full max-w-md mx-auto my-24">
                <div className="p-4 p-16 shadow-lg rounded-xl">
                    <div className={'mb-4 text-center'}>

                        <h1 className='text-2xl font-bold text-center'>Cek Khodam Anda Disini</h1>
                        <p className='text-sm font-semibold'>
                            Cek ayena kodam ente! Apakah ente punya khodam atau hente
                        </p>
                    </div>
                    <Form
                        onFinish={onFinishKodam}
                    >
                        <Form.Item
                            name={'nama'}
                            rules={[
                                {
                                    required: true,
                                }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder={"Ketikan Nama ente"} size='large' />
                        </Form.Item>
                        <Form.Item
                            rules={[
                                {
                                    required: true,
                                }
                            ]}
                            hasFeedback
                            name={'tanggal_lahir'}>
                            <DatePicker placeholder={"Tanggal Lahir Ente"} className={'w-full'} size='large' />
                        </Form.Item>
                        <Form.Item>
                            <Button loading={loading} htmlType='submit' type={"primary"} size='large'>Cek Kodam</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        </>

    )
}
