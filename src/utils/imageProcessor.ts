// src/utils/imageProcessor.ts

/**
 * @file imageProcessor.ts
 * @brief Utility functions for client-side image processing tasks.
 * 
 * @description
 * This module provides a collection of helper functions for basic image manipulation
 * that can be performed on the client-side. Common use cases include resizing images
 * to reduce upload size, compressing images to save bandwidth, or converting formats.
 * Note that computationally intensive image analysis (e.g., object detection) should generally
 * be offloaded to backend or cloud services. This utility focuses on preprocessing.
 * It adheres to the Single Responsibility Principle by focusing on image manipulation utilities
 * and exhibits Cohesion as all functions relate to image processing.
 * Libraries like `expo-image-manipulator` are commonly used for these tasks in Expo projects.
 * 
 * @example
 * import { resizeImage, compressImage } from './imageProcessor';
 * 
 * async function handleImageUpload(imageUri: string) {
 *   const resized = await resizeImage(imageUri, { width: 800 }); // Resize to width 800, maintain aspect ratio
 *   const compressed = await compressImage(resized.uri, 0.7);
 *   // Now upload compressed.uri
 * }
 */

// For Expo projects, expo-image-manipulator is a common choice:
// import * as ImageManipulator from 'expo-image-manipulator';
// import { SaveFormat } from 'expo-image-manipulator';

export interface ImageManipulationOptions {
  width?: number;
  height?: number;
  // Add other options like format, base64, etc.
}

export interface ImageManipulationResult {
  uri: string;
  width: number;
  height: number;
  base64?: string; // Optionally include base64 representation
}

/**
 * Resizes an image based on the provided options.
 * If only width or height is provided, aspect ratio should be maintained.
 * @async
 * @param {string} uri - The URI of the local image to resize.
 * @param {ImageManipulationOptions} options - Resizing options (e.g., width, height).
 * @returns {Promise<ImageManipulationResult>} A promise that resolves to the resized image details.
 * @throws {Error} If resizing fails.
 */
export const resizeImage = async (
  uri: string,
  options: ImageManipulationOptions
): Promise<ImageManipulationResult> => {
  console.log(`Resizing image: ${uri} with options:`, options);
  // Example with expo-image-manipulator:
  // const actions: ImageManipulator.ManipulationAction[] = [];
  // if (options.width && options.height) {
  //   actions.push({ resize: { width: options.width, height: options.height } });
  // } else if (options.width) {
  //   actions.push({ resize: { width: options.width } });
  // } else if (options.height) {
  //   actions.push({ resize: { height: options.height } });
  // } else {
  //   throw new Error('Resize dimensions must be provided (width and/or height).');
  // }
  //
  // try {
  //   const result = await ImageManipulator.manipulateAsync(uri, actions, {
  //     format: SaveFormat.JPEG, // Or SaveFormat.PNG
  //     compress: 0.9, // Default compression for resizing
  //   });
  //   return { uri: result.uri, width: result.width, height: result.height, base64: result.base64 };
  // } catch (error) {
  //   console.error('Error resizing image:', error);
  //   throw error;
  // }
  return Promise.resolve({ // Placeholder
    uri: `resized-${uri.split('/').pop()}`, 
    width: options.width || 0, 
    height: options.height || 0 
  });
};

/**
 * Compresses an image, optionally resizing it first.
 * @async
 * @param {string} uri - The URI of the local image to compress.
 * @param {number} [quality=0.8] - The compression quality (0.0 to 1.0 for JPEG).
 * @param {ImageManipulationOptions} [resizeOptions] - Optional resize options to apply before compression.
 * @returns {Promise<ImageManipulationResult>} A promise that resolves to the compressed image details.
 * @throws {Error} If compression fails.
 */
export const compressImage = async (
  uri: string,
  quality: number = 0.8,
  resizeOptions?: ImageManipulationOptions
): Promise<ImageManipulationResult> => {
  console.log(`Compressing image: ${uri} with quality ${quality}, resizeOptions:`, resizeOptions);
  let currentUri = uri;
  // Example with expo-image-manipulator:
  // try {
  //   if (resizeOptions) {
  //     const resized = await resizeImage(uri, resizeOptions); // Use the resize function above
  //     currentUri = resized.uri;
  //   }
  //
  //   const result = await ImageManipulator.manipulateAsync(
  //     currentUri,
  //     [], // No actions if already resized, or if no resize needed
  //     {
  //       compress: Math.max(0, Math.min(1, quality)), // Clamp quality between 0 and 1
  //       format: SaveFormat.JPEG, // Compression usually implies JPEG
  //     }
  //   );
  //   return { uri: result.uri, width: result.width, height: result.height, base64: result.base64 };
  // } catch (error) {
  //   console.error('Error compressing image:', error);
  //   throw error;
  // }
  return Promise.resolve({ // Placeholder
    uri: `compressed-${uri.split('/').pop()}`, 
    width: 0, // These would be actual dimensions post-compression
    height: 0 
  });
};

// Other potential utilities:
// - convertToBase64(uri: string): Promise<string>
// - rotateImage(uri: string, angle: number): Promise<ImageManipulationResult>

export default {
  resizeImage,
  compressImage,
};
