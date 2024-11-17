import React from 'react'
import Client from './client'
import { Metadata } from 'next';
import { GenerateMetadata } from '@/lib/generate-metadata';


export async function generateMetadata(): Promise<Metadata> {
  return GenerateMetadata('/');
}

export default function page() {
  return <Client/>
}
