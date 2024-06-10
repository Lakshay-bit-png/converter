import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import index from "./index.css";
import { PiUpload } from "react-icons/pi";
import { MdAudiotrack } from "react-icons/md";
import { CiVideoOn } from "react-icons/ci";
import { IoEllipseSharp } from "react-icons/io5";
import { SiConvertio } from "react-icons/si";
import { BsFillFileEarmarkArrowUpFill } from "react-icons/bs";
import { BsFillFileEarmarkArrowDownFill } from "react-icons/bs";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";
import { MdInsertDriveFile } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import warn from "../../assets/No Uploads Yet.....png";
import { IoIosInformationCircle } from "react-icons/io";
import { BiCloudDownload } from "react-icons/bi";
import { About } from "../About";
import { Heroleftmain } from "./Heroleftmain";

const imageFormats2=
{'3FR': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ARW': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'BMP': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'CR2': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'CR3': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'CRW': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'DCR': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'DNG': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ERF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'GIF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'HEIC': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'HEIF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ICNS': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'JFIF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ICO': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'JPEG': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'JPG': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'MOS': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'MRW': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'NEF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ODD': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ODG': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'ORF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'PEF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'PNG': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'PPM': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'PSD': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'RAF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'RAW': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'RW2': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'TIF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'TIFF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'WEBP': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'X3F': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'XCF': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP'], 'XPS': ['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP']}
// const imageFormats2=
// {'AVIF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'BMP': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'GIF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'HEIC': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'HEIF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'ICNS': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'JFIF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'ICO': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'ICO', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'JPEG': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'JPG': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'ODD': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'ODG': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'PNG': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'PPM': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'PSD': ['3FR', 'ARW', 'AVIF', 'BMP', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPEG', 'JPG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS', 'XPS'], 'TIF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'TIFF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'WEBP': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'XCF': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS'], 'XPS': ['3FR', 'ARW', 'AVIF', 'BMP', 'CR2', 'CR3', 'CRW', 'DCR', 'DNG', 'EPS', 'ERF', 'GIF', 'HEIC', 'HEIF', 'ICNS', 'JFIF', 'JPEG', 'JPG', 'MOS', 'MRW', 'NEF', 'ODD', 'ODG', 'ORF', 'PEF', 'PNG', 'PPM', 'PS', 'PSD', 'RAF', 'RAW', 'RW2', 'TIF', 'TIFF', 'WEBP', 'X3F', 'XCF', 'XPS']}
// const videoFormats2={'AVI': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'FLV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'M2TS': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'MKV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'MOV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'MP4': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'MTS': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'TS': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'WMV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'WTV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV'], 'WEBM': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV']}
// const vtoa ={'AVI': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'FLV': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'M2TS': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MKV': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MOV': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MP4': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MTS': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'TS': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WMV': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WTV': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WEBM': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA']}
const videoFormats2={'AVI': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'FLV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'M2TS': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MKV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MOV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MP4': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MTS': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'TS': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WMV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WTV': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WEBM': ['AVI', 'CAVS', 'FLV', 'M2TS', 'MKV', 'MOV', 'MP4', 'MTS', 'SWF', 'TS', 'WEBM', 'WMV', 'WTV', 'AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA']}
const audioFormats2={'AAC': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'AC3': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'AIF': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'AIFC': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'AIFF': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'AU': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'CAF': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'FLAC': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'M4A': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'M4B': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'MP3': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'OGA': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'VOC': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WAV': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA'], 'WMA': ['AAC', 'AC3', 'AIF', 'AIFC', 'AIFF', 'AU', 'CAF', 'FLAC', 'M4A', 'M4B', 'MP3', 'OGA', 'VOC', 'WAV', 'WMA']}
// const imageFormats = [
//   "3FR",
//   "ARW",
//   "AVIF",
//   "BMP",
//   "CR2",
//   "CR3",
//   "CRW",
//   "DCR",
//   "DNG",
//   "EPS",
//   "ERF",
//   "GIF",
//   "HEIC",
//   "HEIF",
//   "ICNS",
//   "ICO",
//   "JFIF",
//   "JPEG",
//   "JPG",
//   "MOS",
//   "MRW",
//   "NEF",
//   "ODD",
//   "ODG",
//   "ORF",
//   "PEF",
//   "PNG",
//   "PPM",
//   "PS",
//   "PSD",
//   "RAF",
//   "RAW",
//   "RW2",
//   "TIF",
//   "TIFF",
//   "WEBP",
//   "X3F",
//   "XCF",
//   "XPS",
// ];
// const videoFormats = [
//   "3G2",
//   "3GP",
//   "3GPP",
//   "AVI",
//   "CAVS",
//   "DV",
//   "DVR",
//   "FLV",
//   "M2TS",
//   "M4V",
//   "MKV",
//   "MOD",
//   "MOV",
//   "MP4",
//   "MPEG",
//   "MPG",
//   "MTS",
//   "MXF",
//   "OGG",
//   "RM",
//   "RMVB",
//   "SWF",
//   "TS",
//   "VOB",
//   "WEBM",
//   "WMV",
//   "WTV",
// ];
const videoFormats=['M4A', 'AU', 'WTV', 'AVI', 'VOC', 'M4B', 'TS', 'MP4', 'WMV', 'AC3', 'AIFC', 'CAF', 'AIFF', 'MOV', 'CAVS', 'WEBM', 'MKV', 'M2TS', 'MTS', 'AAC', 'WAV', 'MP3', 'AIF', 'SWF', 'OGA', 'FLV', 'WMA', 'FLAC']
const imageFormats=['BMP', 'EPS', 'GIF', 'ICNS', 'ICO', 'JPEG', 'JPG', 'PNG', 'PPM', 'TIFF', 'WEBP']
const audioFormats=['WAV', 'AIF', 'M4B', 'VOC', 'AIFC', 'AU', 'MP3', 'AAC', 'M4A', 'AIFF', 'WMA', 'CAF', 'AC3', 'OGA', 'FLAC']
const allformats = [imageFormats2, videoFormats2, audioFormats2];
const allformats2 = [imageFormats, videoFormats, audioFormats];


export const Main = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFormat, setSelectedFormat] = useState(false);
  const [selectedfiles, setSelectedfiles] = useState([]);
  const [dis, setdis] = useState(true);
  const [dragging, setdragging] = useState(false);
  const [selectedwind, setSelectedwind] = useState("2");
  const [displaywarn, setdisplaywarn] = useState(null);
  const [url,seturl] = useState(null)
  const [allexecute, setAllexecute] = useState(false);
  const [commonFileType, setCommonFileType] = useState(null);
  const [commonTo, setCommonto] = useState(null)
  const [diss, setdiss] = useState(true)
  const indicatorStyle = {
    width: `${40}%`,
    height: "4px",
    position: "absolute",
    top: 0,
    left: 0,
  };


  useEffect(()=>{
    console.log(commonTo,commonFileType)
    if( commonFileType!=null && commonTo!=null){
      setdiss(true)
    }
    else{
      setdiss(false)
    }
  },[commonFileType,commonTo])
  useEffect(() => {
    const hasNonEmptyConvertTo = selectedfiles.length>0 && selectedfiles.some((file) => file.convertTo != '');
    setdis(!hasNonEmptyConvertTo);
  }, [selectedfiles]);
  

  const handleImageChange = (event) => {
    const newFiles = event.target.files;

    // Create an array to store the details of selected files
    const updatedFiles = [];

    // Iterate over each file
    Array.from(newFiles).forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        // Here, you can store or process the file data as needed
        console.log("File contents:", reader.result);
      };

      if (file) {
        // Get the file extension
        const fileNameParts = file.name.split(".");
        const fileExtension =
          fileNameParts[fileNameParts.length - 1].toLowerCase();
        console.log("File extension:", fileExtension);

        // Push the file details to the updatedFiles array
        updatedFiles.push({
          file: file,
          convertTo: "", // Initialize the convertTo property
          fileType: fileExtension,
        });

        reader.readAsDataURL(file);
      }
    });

    // Update the selectedfiles state by concatenating the existing array with the new files
    setSelectedfiles([...selectedfiles, ...updatedFiles]);
    console.log(selectedfiles);
  };

  const submitfile = async (event) => {
    event.preventDefault();
    setSelectedfiles((prevSelectedFiles) => {
      return prevSelectedFiles.map((file) => ({
        ...file,
        download: false,
      }));
    });
    
    // Use a for loop to process each file one by one
    for (let index = 0; index < selectedfiles.length; index++) {
      const fileData = selectedfiles[index];
      console.log(commonTo)
      if (fileData.convertTo !== "" || commonTo != null) {
        const { file, convertTo: originalConvertTo, fileType } = fileData;
        let convertTo = originalConvertTo;
        if (commonTo != null) {
           
            convertTo = commonTo;
        }
        console.log(commonTo,"hello")
        // Create a new FormData object
        const formData = new FormData();
        
        formData.append("convert_to", convertTo);
        formData.append("fileType", fileType);
        console.log(fileType);
        let api = "image";
        // Append the selected file to the FormData object
        
        if (fileType.toUpperCase() in imageFormats2)  {
          formData.append("image", file);
          console.log('img haiye')
        } else if (fileType.toUpperCase() in videoFormats2 || fileType.toUpperCase() in audioFormats2 ) {
          formData.append("videoFile", file);
          console.log("video haiye")
          api = "video";
        }
       
        
        try {
          const response = await fetch(`https://lobster-app-eg6c6.ondigitalocean.app/upload_${api}`, {
            method: "POST",
            body: formData,
          });
  
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
  
          const data = await response.json(); // Assuming the API returns JSON data
          console.log("API response:", data);
          setCommonFileType(null)
          // Update the specific file's download property
          setSelectedfiles((prevSelectedFiles) => {
            const newSelectedFiles = [...prevSelectedFiles];
            newSelectedFiles[index] = {
              ...newSelectedFiles[index],
              download: true,
            };
            return newSelectedFiles;
          });
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
          // Handle any errors that occur during the fetch operation
        }
      } else {
        console.log(fileData);
      }
    }
  
    // Optional: Reset the form or perform any other actions needed after submission
  };
  const categorizeFileType = (fileType) => {
    if (fileType.toUpperCase() in imageFormats2) {
      return 'image';
    } else if (fileType.toUpperCase() in videoFormats2) {
      return 'video';
    } else if (fileType.toUpperCase() in audioFormats2) {
      return 'audio';
    } else {
      return null;
    }
  };

  useEffect(() => {
    console.log(selectedfiles)
    if(selectedfiles.length==0){
      setAllexecute(null);
      setCommonFileType(null);
      setCommonto(null)
    }
    else if (selectedfiles.length > 0) {
      console.log(selectedfiles[0].fileType)
      const firstFileType = categorizeFileType(selectedfiles[0].fileType);
      const isSameType = selectedfiles.every(file => categorizeFileType(file.fileType) === firstFileType);
      if (isSameType) {
        setCommonFileType(selectedfiles[0].fileType.toUpperCase());
        setAllexecute(true);
      } else {
        setCommonFileType(null);
        setAllexecute(false);
        setCommonto(null)
      }
    } else {
      setCommonFileType(null);
    }
  }, [selectedfiles]);


  const uploadFileByIndex = async (index) => {
    const fileData = selectedfiles[index];
    
    if (fileData.convertTo !== "") {
      const { file, convertTo, fileType } = fileData;
      setSelectedfiles((prevSelectedFiles) => {
        const newSelectedFiles = [...prevSelectedFiles];
        newSelectedFiles[index] = {
          ...newSelectedFiles[index],
          download: false,
        };
        return newSelectedFiles;
      });
      // Create a new FormData object
      const formData = new FormData();
      console.log('oaoou',convertTo)
      formData.append("convert_to", convertTo);
      formData.append("fileType", fileType);
  
      let api = "image";
      // Append the selected file to the FormData object
      if (fileType.toUpperCase() in imageFormats2)  {
        formData.append("image", file);
      } else if (fileType.toUpperCase() in videoFormats2 ) {
        formData.append("videoFile", file);
        api = "video";
      }
      else if (fileType.toUpperCase() in audioFormats2) {
        formData.append("videoFile", file);
        api = "video";
      }
  
      try {
        const response = await fetch(`https://lobster-app-eg6c6.ondigitalocean.app/upload_${api}`, {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json(); // Assuming the API returns JSON data
        console.log("API response:", data);
  
        // Update the specific file's download property
        setSelectedfiles((prevSelectedFiles) => {
          const newSelectedFiles = [...prevSelectedFiles];
          newSelectedFiles[index] = {
            ...newSelectedFiles[index],
            download: true,
          };
          return newSelectedFiles;
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        // Handle any errors that occur during the fetch operation
      }
    } else {
      console.log(fileData);
    }
  };
  
  

  const handleFormatChange = (index, format) => {
    const updatedFiles = [...selectedfiles];
    
      updatedFiles[index].convertTo = format;
    setSelectedfiles(updatedFiles);
    setSelectedFile(true);
    console.log(selectedfiles);
  };
  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedfiles];
    updatedFiles.splice(index, 1); // Remove the file data at the specified index
    setSelectedfiles(updatedFiles);
    setSelectedFile(selectedfiles[selectedfiles.length - 1]);
    // Update the selectedfiles state
  };

  useEffect(() => {
    if (displaywarn != null) {
      setTimeout(() => {
        setdisplaywarn(null);
      }, 3500);
    }
  }, [displaywarn]);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setdragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setdragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setdragging(false);
    if (e.dataTransfer.files.length > 1) {
      setdisplaywarn("Upload file one by one");
      return;
    }
    if (selectedfiles.length >= 10) {
      setdisplaywarn("Max 10 file conversions are allowed at a time");
      return;
    }
    // if(e.dataTransfer.files.length>1){
    //   setdisplaywarn("You can upload at max 1 file at a time")
    //   return
    // }
    // else{
    //   setdisplaywarn(null)
    // }

    const file = e.dataTransfer.files[0];
    setSelectedFile(file);

    const droppedFiles = [...e.dataTransfer.files];

    // Process dropped files
    const updatedFiles = droppedFiles.map((file) => ({
      file: file,
      convertTo: "", // Initialize the convertTo property
      fileType: file.name.split(".").pop().toLowerCase(), // Get file extension
    }));

    // Update selectedFiles state by concatenating existing files with dropped files
    setSelectedfiles([...selectedfiles, ...updatedFiles]);
    console.log(selectedfiles);
  };

  return (
    <>
      <div className="main-panel">
        <div className="landing">
          <Navbar />
          <div className="hero">
            <Heroleftmain/>
            <div className="hero-right">
              <form
                className={`input-panel ${dragging == true ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDragEnter={handleDragEnter}
                onDrop={handleDrop}
              >
                {displaywarn != null && (
                  <div className="absolute bottom-0 w-[100%] flex items-center justify-center gap-2 bg-gray-600 text-gray-50 h-8">
                    <IoIosInformationCircle /> {displaywarn}
                  </div>
                )}
                <div className="flex gap-4 z-5">
                  <div>
                    <label
                      htmlFor="file-input"
                      className={`choose  ${
                        selectedfiles.length == 10
                          ? "cursor-not-allowed"
                          : "cursor-pointer "
                      } `}
                      onClick={
                        selectedfiles.length == 10
                          ? () => {
                              setdisplaywarn("File limit exceeded");
                            }
                          : null
                      }
                    >
                      <PiUpload />
                      Choose Files
                    </label>
                    <input
                      name="image"
                      id="file-input"
                      type="file"
                      disabled={selectedfiles.length == 10 ? true : false}
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                      required
                    />
                  </div>
                  {/* <select
                    className="format-array cursor-pointer"
                    name="convert_to"
                    id="convert-to-select"
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    required
                  >
                    <option disabled={true} selected>
                      ...
                    </option>
                    {imageFormats.map((format, index) => (
                      <option key={index} value={format}>
                        {format}
                      </option>
                    ))}
                  </select> */}
                </div>
                <div className="text-gray-400 text-md">or Drag and Drop</div>
                {selectedFile != null && (
                  <div className="text-white text-lg">
                    {selectedFile?.name?.length > 28
                      ? `${selectedFile?.name?.substring(0, 28)}...`
                      : selectedFile?.name}
                  </div>
                )}
              </form>
              <div className="flex gap-6">
                <button
                  className={`w-20 inline-block transition-colors duration-300 ease-in-out ${
                    selectedwind != "1" ? "text-gray-200" : "   text-yellow-400"
                  }`}
                  onClick={() => {
                    setSelectedwind("1");
                  }}
                >
                  Progress
                </button>
                <button
                  className={`w-20  inline-block transition-colors duration-300 ease-in-out ${
                    selectedwind != "2" ? "text-gray-200" : "text-yellow-400"
                  }`}
                  onClick={() => {
                    setSelectedwind("2");
                  }}
                >
                  Uploads
                </button>
              </div>
              <div className="convert-bt">
              <button
                className={
                  !diss
                    ? "w-[120px] cursor-not-allowed text-white   disabled h-[50px] rounded-[4px]"
                    : "w-[120px]  text-white  bg-green-500 h-[50px] rounded-[4px] hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
                }
                onClick={submitfile}
                disabled={!diss}
              >
                Convert All To
              </button>
              <select
                          className="format-array cursor-pointer bg-gray-300"
                          name="convert_to"
                          value={commonTo} // Set the value of the select to the convertTo property of the file
                          onChange={(e) =>
                            setCommonto(e.target.value)
                          }
                          required
                        >
                          <option value="" disabled selected>
                            ...
                          </option>
                          {allformats2.map((formats, index) => (
                            <React.Fragment key={index}>
                              {formats.includes(commonFileType) &&
                                formats.map((format, formatIndex) => (
                                  <option key={formatIndex} value={format}>
                                    {format}
                                  </option>
                                ))}
                            </React.Fragment>
                          ))}
                        </select>
              <button
                className={
                  dis ==true
                    ? "w-[120px] cursor-not-allowed text-white   disabled h-[50px] rounded-[4px] "
                    : "w-[120px] text-white  bg-green-500 h-[50px] rounded-[4px] hover:bg-green-600 hover:text-white transition duration-300 ease-in-out"
                }
                onClick={submitfile}
                disabled={dis}
              >
                Convert All
              </button>
              </div>
              {selectedwind == "1" && (
                <div className="progress">
                  <div className="ongoing">
                    <div className="file-status w-[70%]">
                      <BsFillFileEarmarkArrowUpFill className="text-blue-400 text-3xl cursor-pointer" />
                      <div className="progress-details flex flex-col gap-1 w-full ">
                        <div>
                          <div className="text-gray-100 flex gap-3 items-center">
                            Wait a Second{" "}
                            <div className="h-[20px] w-[0.2px] bg-red-500"></div>
                            Filename
                          </div>
                        </div>
                        <div className="relative bg-gray-100 w-full h-1 rounded overflow-hidden border-none">
                          <div
                            style={indicatorStyle}
                            className="bg-blue-500"
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-[100%] md:w-auto">
                      <button className="text-gray-100 bg-gray-100-less  rounded-md h-[40px] w-[100%] md:w-[120px] ">
                        Cancel
                      </button>
                    </div>
                  </div>
                  <div className="ongoing">
                    <div className="file-status w-[70%] ">
                      <BsFillFileEarmarkArrowDownFill className="text-green-400 text-3xl cursor-pointer" />
                      <div className="progress-details flex flex-col gap-1 w-full ">
                        <div>
                          <div className="text-gray-100 flex gap-3 items-center">
                            Wait a Second{" "}
                            <div className="h-[20px] w-[0.2px] bg-red-500"></div>
                            Filename
                          </div>
                        </div>
                        <div className="relative bg-gray-100 w-full h-1 rounded overflow-hidden border-none">
                          <div className="absolute h-[4px] mt-0 ml-0 bg-green-500 w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-[100%] md:w-auto">
                      <button className="text-gray-100 bg-gray-100-less  rounded-md h-[40px] w-[100%] md:w-[120px] ">
                        Download
                      </button>
                    </div>
                  </div>
                  <div className="ongoing">
                    <div className="file-status w-[70%]">
                      <BsFillFileEarmarkExcelFill className="text-red-400 text-3xl cursor-pointer" />
                      <div className="progress-details flex flex-col gap-1 w-full ">
                        <div>
                          <div className="text-gray-100 flex gap-3 items-center">
                            Wait a Second{" "}
                            <div className="h-[20px] w-[0.2px] bg-red-500"></div>
                            Filename
                          </div>
                        </div>
                        <div className="relative bg-gray-100 w-full h-1 rounded overflow-hidden border-none">
                          <div className="absolute h-[4px] mt-0 ml-0 bg-red-500 w-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center w-[100%] md:w-auto">
                      <button className="text-gray-100 bg-gray-100-less  rounded-md h-[40px] w-[100%] md:w-[120px] ">
                        Retry
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {selectedwind == "2" && (
                <div className="file-queue">
                  {selectedfiles?.length > 0 ? null : (
                    <>
                      {/* <div className="text-center text-gray-200">
                      No Uploads Yet
                    </div> */}
                      <img src={warn} className="h-[100%] m-auto" />
                    </>
                  )}
                  {selectedfiles.map((file, index) => (
                    <div className="file " key={index}>
                       {file?.download==true && <div className="loader-border"></div>}
                      <div className="flex items-center gap-3">
                      
                        <MdInsertDriveFile className="size-[24px] text-gray-500" />
                        <div>
                          {file.file.name.length > 18
                            ? `${file.file.name.substring(0, 18)}...`
                            : file.file.name}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                      
                      <div className="font-semibold text-red-500">{file?.fileType}</div>
                        <div>Convert To:</div>
                        {file?.fileType.toUpperCase() in videoFormats2 && 
                        <>
                      {/* <div className="flex gap-3">
                        <div className="flex items-center">
                          <input type="radio" id="audio1" name="Group" value="option1" />
                          <label htmlFor="audio1" className="ml-1"><MdAudiotrack /></label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="video1" name="Group" value="option1" />
                          <label htmlFor="video1" className="ml-1"><CiVideoOn /></label>
                        </div>
                      </div> */}

                      </>
                      }
                        <select
                          className="format-array cursor-pointer bg-gray-300"
                          name="convert_to"
                          value={file.convertTo} // Set the value of the select to the convertTo property of the file
                          onChange={(e) =>
                            handleFormatChange(index, e.target.value)
                          }
                          required
                        >
                          <option value="" disabled selected>
                            ...
                          </option>
                          {allformats.map((formats, index) => (
                            <React.Fragment key={index}>
                              {file.fileType.toUpperCase() in formats &&
                                formats[file.fileType.toUpperCase()].map((format, formatIndex) => (
                                  <option key={formatIndex} value={format}>
                                    {format}
                                  </option>
                                ))}
                            </React.Fragment>
                          ))}
                        </select>
                        
                        
                        {file?.download==true && (
                         <>
                          <DownloadButton
                            fileUrl={`${file.file.name
                              .split(".")
                              .slice(0, -1)
                              .join(".")}_converted_file.${commonTo==null ? file.convertTo: commonTo}`}
                              type={commonTo==null? file.fileType : commonTo}
                          />
                         
                          </>
                        )}
                         <SiConvertio className={`${file.convertTo ? 'text-green-500 cursor-pointer' : 'text-gray-500 cursor-not-allowed'} text-xl `} onClick={()=>{uploadFileByIndex(index)}} />

                        <RxCross2
                          className="cursor-pointer"
                          onClick={() => handleRemoveFile(index)}
                        />
                      </div>
                      
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
};





const DownloadButton = ({ fileUrl,type }) => {
  const [showButton, setShowButton] = useState(false);
  console.log(fileUrl)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // Run effect only once after component mounts
  const handleDownload = () => {
    // URL of the file to download
    var url;
    if (type.toUpperCase() in imageFormats2){
      url="https://lobster-app-eg6c6.ondigitalocean.app/download/uploads/"+fileUrl
    }
    else if(type.toUpperCase() in videoFormats2){
      url="https://lobster-app-eg6c6.ondigitalocean.app/download/uploads/"+fileUrl
      
    }
    else if(type.toUpperCase() in audioFormats2){
      url="https://lobster-app-eg6c6.ondigitalocean.app/download/uploads/"+fileUrl
      
    }
    console.log(url)
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = url;
    downloadAnchor.target = "_blank"; // Open in new tab
    // Set the download filename

    // Append the anchor to the body
    document.body.appendChild(downloadAnchor);

    // Delay before triggering the click event
    setTimeout(() => {
      downloadAnchor.click();
      // Clean up
      document.body.removeChild(downloadAnchor);
    }, 100);
  };

  return (
    <>
    {showButton && (
      <BiCloudDownload
        className="cursor-pointer text-2xl"
        onClick={handleDownload}
      />
      
    )}
    </>
  );
};


